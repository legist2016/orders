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
  };
  products: Array<Product> = null;
  constructor(private http: HttpClient) {
    this.init();
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
          this.products = data;
        })
        .catch(err => {});
    }
  }

  init() {
    this.model = {
      order: new Order(),
      student: null,
      query: new Student(),
      querying: false,
      message: null
    };
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
}
