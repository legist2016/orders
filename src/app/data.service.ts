import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Order, Student, Product, OrderItem } from "./wizards/order";
import { Config } from 'src/config'


/**装饰器-捕获Promise对象异常*/
export function CatchErr() {
  return function (target, key, desc) {
    var oMethod = desc.value;
    desc.value = function (...args) {
      return oMethod.apply(this, args)
        .catch(catcherr)
    }
  }
}

/**装饰器-更新查询状态*/
export function Querying() {
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

  /**订单流程信息 */
  flows

  /**当前订单*/
  order: Order = null;

  newOrder(student?) {
    this.order = Object.assign(new Order(), student)
    this.items = this.initItems(new Array<OrderItem>())
  }

  setOrder(order, items?, flows?) {
    this.order = Object.assign(new Order(), order)
    if (items) {
      this.items = this.initItems(items)
      this.flows = flows
      praseArray(OrderItem, items)
    }
  }



  //@Querying()
  findOrder(id, key) {
    //this.http.get("assets/order.json").toPromise<any>()
    return this.http.get(`${Config.apiOrderUrl}/key/${key}/${id}`).toPromise<any>()
      .then(
        (data) => {
          this.setOrder(data.order, data.items, data.flows)
          console.log(data)
        });

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
  //@Querying() @CatchErr()
  LoadProductList(state?: number) {
    //if (!this.products) {
      let url = Config.apiProductUrl
      if (state != undefined) {
        url = url + "/state/" + state
      }
      //this.querying = true
      return this.http
        .get(url)
        .toPromise<any>()
        .then(data => {
          this.products = new Array<Product>()
          for (let item of data) {
            this.products.push(item)
          }
        })
    /*} else {
      return new Promise<any>((resolve, reject) => {
        resolve(this.products)
      })
    }*/
  }
  /**保存新产品项目 */
  //@Querying() @CatchErr()
  postProduct(product) {
    return this.http.post(Config.apiProductUrl, product).toPromise()
  }
  /**
   * 修改产品项目
   * @param product 
   */
  //@Querying() @CatchErr()
  putProduct(product) {
    return this.http.put(Config.apiProductUrl + '/' + product.id, product).toPromise()
  }
  /**
   * 删除一组产品
   * @param ids 
   */
  //@Querying() @CatchErr()
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
  //@Querying() @CatchErr()
  loadOrderList(states?: string) {
    //if (this.orders == null) {
    let url = Config.apiOrderUrl
    if (states) {
      url += `/state/${states}`
    }
    return this.http.get(url).toPromise<any>()
      .then(data => {
        this.orders = this.initItems(new Array<Order>())
        praseArray(Order, data)
        for (let item of data) {
          this.orders.push(item)
        }
      })//.catch(this.catch)
    //.finally(this.finally)
    //}
    /*return new Promise((resolve, reject) => {
      resolve(this.orders)
    })*/
  }
  /**保存新订单 */
  //@Querying() //@CatchErr()
  postOrder(order, items) {
    return this.http.post(Config.apiOrderUrl, { order: order, items: items }).toPromise()
  }
  /**修改订单 */
  //@Querying()
  putOrder(order, items) {
    //console.log(items)
    return this.http.put(Config.apiOrderUrl + '/' + order.id, { order: order, items: items, deleted: items.api.deleted }).toPromise()
  }

  //@Querying()
  putOrderState(order, newState) {
    return this.http.put(`${Config.apiOrderUrl}/state/${order.id}/${newState}`, null).toPromise()
  }

  /**删除一组订单 */
  //@Querying() @CatchErr()
  deleteOrder(ids) {
    return this.http.delete(Config.apiOrderUrl + '/delete/' + ids.join(',')).toPromise()
  }

  

  test(){
    this.http.get('').toPromise()
    
  }
  /*
  
get(
  url: string, 
  options: 
  { 
    headers?: HttpHeaders | { [header: string]: string | string[]; }; 
    observe?: "body"; 
    params?: HttpParams | { [param: string]: string | string[]; }; 
    reportProgress?: boolean; 
    responseType: "arraybuffer"; 
    withCredentials?: boolean; }
    ): Observable<ArrayBuffer>  
  
  */

}



@Injectable({
  providedIn: "root"
})
export class ApplyDataService extends DataService {
  model: {
    student: Order;
    query: Student;
    step: number
  };

  //products: Array<Product> = null;
  
  constructor(public http: HttpClient) {
    super(http)
    //this.init();
    this.LoadProductList(2);

  }

  /*get cost() {
    let cost = 0;

    for (let item of this.model.order.items) {
      //cost += (item.count) * (item.product.price);
    }
    return cost
  }*/

  getStudentInfo(xh, xm) {
    return this.http.get(`${Config.apiStudentUrl}/${xh}`).toPromise<any>();
  }

  init() {
    this.model = {
      //order: null,
      student: null,
      query: new Student(),
      //querying: false,
      //message: null,
      //items: new Array<OrderItem>(),
      step: 1

    };
    this.order = null;
    this.items = null;
    this.querying = false;
    //this.LoadProductList(2);

  }

  /*Order(neworder?: boolean) {
    if (neworder) {
      this.model.order = new Order();
    } else {
      this.model.order = Object.assign(new Order(), this.model.student);
    }
    //console.log(this.model)
    this.model.order.init(this.products)
  }*/

  /*@Querying()
  queryStudent1() {
    var xh = this.model.query.xh;
    var xm = this.model.query.xm;

  }*/

  queryStudent() {
    var xh = this.model.query.xh;
    var xm = this.model.query.xm;
    //this.model.querying = true;
    this.model.student = null;
    //this.model.message = null;
    return this.getStudentInfo(xh, xm)
      //.toPromise<any>()
      .then(data => {
        //console.log(data)
        //this.model.querying = false;
        data = {
          xh: data.XH,
          xm: data.XM,
          xb: data.XB,
          csrq: data.CSRQ,
          yx: data.YX, zy: data.ZY, rxsj: data.RXRQ, bysj: data.BYRQ
        };
        this.model.student = data
        return;
        if (data.xm && data.xm == xm) {
          this.model.student = data;
          //this.ds.setStudent(this.student);
        } else {
          //this.model.message = "填写的信息无效。";
        }
      })
      /*.catch(err => {
        this.model.querying = false;
        window.alert(err.message)
        console.log(err);
      });*/
  }

  /*insertOrder() {
    this.model.querying = true;
    return this.http.get("assets/addorder.json").toPromise<any>()
      .then(data => {
        this.model.order.key = data.key
        this.model.querying = false;
      }).catch(err => {
        window.alert(err.message)
        this.model.querying = false;
      })
  }*/

  /*@Querying()
  updateOrder(order, items) {
    return this.http.get("assets/addorder.json").toPromise<any>()
      .then(data => {
      },catcherr)
  }*/

}

/*@Injectable({
  providedIn: "root"
})
export class ManagerDataService extends DataService {
  constructor(
    http: HttpClient
  ) {
    super(http)

  }

}*/

function praseArray<T>(type: (new (...args) => T), array, callback?: any) {
  //let ret = new Array<T>()
  for (let index in array) {
    let item = array[index]
    let newItem = new type()
    //console.log(index)
    newItem = Object.assign(newItem, item)
    array[index] = newItem
    //ret.push(newItem)
    callback && callback(newItem)
  }
  //return ret
}



