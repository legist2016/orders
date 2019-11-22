import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Order, Student, Product, OrderItem } from "./wizards/order";
import { Config } from 'src/config'


/**装饰器-捕获Promise对象异常*/
function Catch() {
  return function (target, key, desc) {
    var oMethod = desc.value;
    desc.value = function (...args) {
      return oMethod.apply(this, args)
        .catch(catcherr)
    }
  }
}

/**装饰器-更新查询状态*/
function Querying() {
  return function (target, key, desc) {
    var oMethod = desc.value;
    desc.value = function (...args) {
      this.querying = true
      return oMethod.apply(this, args)
        .finally(() => {
          this.querying = false
        })
    }
  }
}

export function catcherr(err) {
  console.log('err:', err)
  window.alert(err.error && err.error.Message || err.message || '发生错误')
}

/**数据服务*/
export class DataService {
  constructor(public http: HttpClient) {

  }
  /**产品数组*/
  products: Array<Product> = null;

  /**查询状态*/
  querying: boolean = false;

  /**当前订单选取项目数组*/
  items: Array<OrderItem> = null;

  /**当前订单*/
  order: Order = null;

  newOrder(student?) {
    this.order = Object.assign(new Order(), student)
    this.items = this.initItems(new Array<OrderItem>())
  }

  setOrder(order, items?) {
    this.order = Object.assign(new Order(), order)
    if (items) {
      this.items = this.initItems(items)
      praseArray(OrderItem, items)
    }
  }

  initItems(items) {
    items.api = {
      add: function (product) {
        let item = this.find(item => item.productId == product.id)
        if (item) {
          item.count++;
        }
        else {
          this.push(new OrderItem(product.name, product.id, 1, product.price))
        }
      }.bind(items),
      delete: function (item) {
        if (window.confirm(`是否删除项目：${item.name}（${item.count}份）？`)) {
          let index = this.findIndex(i => i == item)
          //console.log(item, index)
          if (index >= 0) {
            this.splice(index, 1)
            if (item.id != 0) {
              this.api.deleted.push(item)
              console.log(this.api.deleted)
            }
          }
        }

      }.bind(items),
      deleted: []
    }
    return items
  }


  /**载入产品列表
   * @param state 产品状态筛选
   */
  @Querying() @Catch()
  LoadProductList(state?: number) {
    if (!this.products) {
      let url = Config.apiProductUrl
      if (state != undefined) {
        url = url + "/state/" + state
      }
      this.querying = true
      return this.http
        .get(url)
        .toPromise<any>()
        .then(data => {
          this.products = new Array<Product>()
          for (let item of data) {
            this.products.push(item)
          }
        })
    } else {
      return new Promise<any>((resolve, reject) => {
        resolve(this.products)
      })
    }
  }
  /**保存新产品项目 */
  @Querying() @Catch()
  postProduct(product) {
    return this.http.post(Config.apiProductUrl, product).toPromise()
  }
  /**
   * 修改产品项目
   * @param product 
   */
  @Querying() @Catch()
  putProduct(product) {
    return this.http.put(Config.apiProductUrl + '/' + product.id, product).toPromise()
  }
  /**
   * 删除一组产品
   * @param ids 
   */
  @Querying() @Catch()
  deleteProduct(ids) {
    return this.http.delete(Config.apiProductUrl + "/delete/" + ids.join(',')).toPromise()
  }

  /**
   * 当前订单列表
   */
  orders: Array<Order> = null
  /**
   * 载入订单列表
   * @param state 
   */
  @Querying() @Catch()
  loadOrderList(state?: number) {
    if (this.orders == null) {
      return this.http.get(Config.apiOrderUrl).toPromise<any>()
        .then(data => {
          this.orders = this.initItems(new Array<Order>())
          praseArray(Order, data)
          for (let item of data) {
            this.orders.push(item)
          }
        })//.catch(this.catch)
      //.finally(this.finally)
    }
    return new Promise((resolve, reject) => {
      resolve(this.orders)
    })
  }
  /**保存新订单 */
  @Querying() //@Catch()
  postOrder(order, items) {
    return this.http.post(Config.apiOrderUrl, { order: order, items: items }).toPromise()
  }
  /**修改订单 */
  @Querying()
  putOrder(order, items) {
    console.log(items)
    return this.http.put(Config.apiOrderUrl + '/' + order.id, { order: order, items: items, deleted: items.api.deleted }).toPromise()
  }
  /**删除一组订单 */
  @Querying() @Catch()
  deleteOrder(ids) {
    return this.http.delete(Config.apiOrderUrl + '/delete/' + ids.join(',')).toPromise()
  }

}



@Injectable({
  providedIn: "root"
})
export class ApplyDataService extends DataService {
  model: {
    order: Order;
    student: Order;
    query: Student;
    querying: boolean;
    message: string;
    //items: Array<OrderItem>
    step: number
  };
  products: Array<Product> = null;
  constructor(public http: HttpClient) {
    super(http)
    //this.init();
    this.LoadProductList(2);

  }

  get cost() {
    let cost = 0;

    for (let item of this.model.order.items) {
      //cost += (item.count) * (item.product.price);
    }
    return cost
  }

  getStudentInfo(xh, xm) {
    return this.http.get("assets/student.json");
  }

  init() {
    this.model = {
      order: null,
      student: null,
      query: new Student(),
      querying: false,
      message: null,
      //items: new Array<OrderItem>(),
      step: 1

    };
    this.order = null;
    this.items = null;
    this.querying = false;
    //this.LoadProductList(2);

  }

  Order(neworder?: boolean) {
    if (neworder) {
      this.model.order = new Order();
    } else {
      this.model.order = Object.assign(new Order(), this.model.student);
    }
    //console.log(this.model)
    this.model.order.init(this.products)
  }

  queryStudent() {
    var xh = this.model.query.xh;
    var xm = this.model.query.xm;
    this.model.querying = true;
    this.model.student = null;
    this.model.message = null;
    this.getStudentInfo(xh, xm)
      .toPromise<any>()
      .then(data => {
        this.model.querying = false;
        this.model.student = data;
        return;
        if (data.xm && data.xm == xm) {
          this.model.student = data;
          //this.ds.setStudent(this.student);
        } else {
          this.model.message = "填写的信息无效。";
        }
      })
      .catch(err => {
        this.model.querying = false;
        window.alert(err.message)
        console.log(err);
      });
  }

  insertOrder() {
    this.model.querying = true;
    return this.http.get("assets/addorder.json").toPromise<any>()
      .then(data => {
        this.model.order.key = data.key
        this.model.querying = false;
      }).catch(err => {
        window.alert(err.message)
        this.model.querying = false;
      })
  }

  /*@Querying()
  updateOrder(order, items) {
    return this.http.get("assets/addorder.json").toPromise<any>()
      .then(data => {
      },catcherr)
  }*/

  @Querying()
  findOrder(id, key) {
    //this.http.get("assets/order.json").toPromise<any>()
    return this.http.get(`${Config.apiOrderUrl}/key/${key}/${id}`).toPromise<any>()
      .then(
        (data) => {
          /*this.model.order = Object.assign(new Order(), data.order)
          this.model.order.init(this.products)
          console.log(this.model.order)
          this.model.querying = false;*/
          this.setOrder(data.order, data.items)

          console.log(data)
        },
        catcherr);

  }
}

@Injectable({
  providedIn: "root"
})
export class ManagerDataService extends DataService {
  constructor(
    http: HttpClient
  ) {
    super(http)

  }

}

function praseArray<T>(type: (new (...args) => T), array, callback?: any){
  //let ret = new Array<T>()
  for (let index in array) {
    let item = array[index]
    let newItem = new type()
    console.log(index)
    newItem = Object.assign(newItem, item)
    array[index] = newItem
    //ret.push(newItem)
    callback && callback(newItem)
  }
  //return ret
}



