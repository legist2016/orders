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
    itemsCount: {}
    itemsSelected: {}
    items: Array<Item>
    step:number
  };
  products: Array<Product> = null;
  constructor(private http: HttpClient) {
    this.init();
    this.LoadProductList();
  }

  get cost() {
    let cost = 0;

    for (let item of this.model.items) {
      //console.log(1111112)
      if (item.selected) {
        //console.log(1111113)
        cost += (item.count) * (item.product.price);
      }
    }
    return cost
  }

  getStudentInfo(xh, xm) {
    return this.http.get("/assets/student.json");
  }

  LoadProductList() {
    if (!this.products) {
      this.http
        .get("/assets/products.json")
        .toPromise<any>()
        .then(data => {
          console.log(data)
          this.products = data;
          for (let product of this.products) {
            this.model.items.push(new Item(product))
          };
        })
        .catch(err => { });
    }
  }

  init() {
    this.model = {
      order: new Order(),
      student: null,
      query: new Student(),
      querying: false,
      message: null,
      itemsCount: {},
      itemsSelected: {},
      items: new Array<Item>(),
      step:1

    };
    if (this.products) {
      for (let product of this.products) {
        this.model.items.push(new Item(product))
      };
    }
  }

  order(neworder: boolean) {
    if (neworder) {
      this.model.order = new Order();
    } else {
      this.model.order = this.model.student;
    }
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
        this.model.message = err.message;
        console.log(err);
      });
  }

  submitOrder(){
    this.model.order.key="242424564abcdef8989abcdef"
  }

  next(){
    
  }
}
