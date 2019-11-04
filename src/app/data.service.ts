import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Order, Student, Product, Item } from "./wizards/order";

@Injectable({
  providedIn: "root"
})
export class DataService {
  model: {
    order: Order;
    student: Order;
    query: Student;
    querying: boolean;
    message: string;
    //items: Array<Item>
    step: number
  };
  products: Array<Product> = null;
  constructor(private http: HttpClient) {
    this.init();
    this.LoadProductList();
  }

  get cost() {
    let cost = 0;

    for (let item of this.model.order.items) {
      //console.log(1111112)
      //if (item.selected) {
        //console.log(1111113)
        cost += (item.count) * (item.product.price);
      //}
    }
    return cost
  }

  getStudentInfo(xh, xm) {
    return this.http.get("assets/student.json");
  }

  LoadProductList() {
    if (!this.products) {
      this.http
        .get("assets/products.json")
        .toPromise<any>()
        .then(data => {
          console.log(data)
          this.products = data;
          for (let product of this.products) {
            this.model.order.items.push(new Item(product))
          };
        })
        .catch(err => { });
    }
  }

  init() {
    this.model = {
      order: null,
      student: null,
      query: new Student(),
      querying: false,
      message: null,
      //items: new Array<Item>(),
      step: 1

    };

    if (this.products) {
      for (let product of this.products) {
        this.model.order.items.push(new Item(product))
      };
    }
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
    //this.router.navigateByUrl('/input-order')
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

  submitOrder(action, caller, arg) {
    this.model.querying = true;
    return this.http.get("assets/addorder.json").toPromise<any>()
      .then(data => {
        this.model.order.key = data.key
        action.call(caller, arg)
        this.model.querying = false;
      }).catch(err => {
        window.alert(err.message)
        this.model.querying = false;
      })
  }

  findOrder(key) {
    this.http.get("assets/order.json").toPromise<any>()
      .then(
        (data) => {
          /*for(let item of data.orditems){
            item.product = this.products.find((product)=>{
              return product.id == item.product
            })
          }*/
          this.model.order = Object.assign(new Order(), data.order)
          //this.model.order.items = data.items
          this.model.order.init(this.products)
          console.log(this.model.order)
        },
        (err) => {
          window.alert(err.message)
        });

  }
}
