import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Order, Student, Product, OrderItem } from "./wizards/order";
import { Config } from 'src/config'

export class DataService {
  constructor(public http: HttpClient) { }
  products: Array<Product> = null;
  querying: boolean = false;
  catch = ((err) => {
    window.alert(err.message)
  }).bind(this)
  finally = (() => {
    this.querying = false
  }).bind(this)
  LoadProductList(state?: number) {
    return new Promise<any>((resolve, reject) => {
      if (!this.products) {
        let url = Config.apiProductUrl
        if (state != undefined) {
          url = url + "/state/" + state
        }
        this.querying = true
        this.http
          .get(url)
          .toPromise<any>()
          .then(data => {
            this.products = new Array<Product>()
            for (let item of data) {
              this.products.push(item)
            }
            resolve();
          })
          .catch(reject);
      } else {
        resolve()
      }
    })
      .catch(this.catch)
      .finally(this.finally)
  }
  postProduct(product) {
    //console.log(product)
    return this.http.post("http://localhost:3019/api/product", product).toPromise()

  }
  putProduct(product) {
    //console.log(product)
    return this.http.put("http://localhost:3019/api/product/" + product.id, product).toPromise()
  }

  deleteProduct(ids) {
    return this.http.delete("http://localhost:3019/api/product/delete/" + ids.join(',')).toPromise()
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
    this.init();
    this.LoadProductList(2);

  }

  get cost() {
    let cost = 0;

    for (let item of this.model.order.items) {
      cost += (item.count) * (item.product.price);
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
  }

  order(neworder?: boolean) {
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

  updateOrder() {
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

  findOrder(key) {
    this.model.querying = true;
    this.http.get("assets/order.json").toPromise<any>()
      .then(
        (data) => {
          this.model.order = Object.assign(new Order(), data.order)
          this.model.order.init(this.products)
          console.log(this.model.order)
          this.model.querying = false;
        },
        (err) => {
          window.alert(err.message)
          this.model.querying = false;
        });

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
    this.model = {
      orderList: null,
      querying: false
    }

    this.LoadProductList()
  }
  model: {
    orderList;
    querying: boolean;
  };
  //querying: boolean;


  loadOrderList(state) {
    this.model.querying = true
    return this.http.get("assets/orderlist.json").toPromise()
      .then(data => {
        this.model.querying = false
        this.model.orderList = data
        /*if(comp&&comp[prop]){
          comp[prop] = data['orders']
        }*/
        praseArray(Order, data['orders'], order => {
          praseArray(OrderItem, order['items'])
        })
      })
      .catch(err => {
        window.alert(err.message)
        this.model.querying = false
      })

  }


}

function praseArray<T>(type: (new () => T), array, callback?: any) {
  for (let index in array) {
    let item = array[index]
    let newItem = new type()
    console.log(index)
    newItem = Object.assign(newItem, item)
    array[index] = newItem
    callback || callback(newItem)
  }
}



