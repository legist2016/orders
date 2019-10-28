import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Order, Student } from "./wizards/order";

@Injectable({
  providedIn: "root"
})
export class DataService {
  order: Order;
  student: Student = null;
  studentQueryModel: Student;
  querying = false

  constructor(private http: HttpClient) {}

  getStudentInfo(xh, xm) {
    return this.http.get("/assets/student.json");
  }

  setOrder(order: Order) {
    this.order = order;
  }

  getOrder() {
    if (!this.order) {
      this.order = new Order();
    }
    return this.order;
  }
  set Order(order: Order) {
    this.order = order;
  }

  get Order() {
    if (!this.order) {
      this.order = new Order();
    }
    return this.order;
  }
  set Student(student: Student) {
    this.student = student;
  }
  setStudent(student: Student) {
    this.student = student;
  }

  get Student() {
    return this.student;
  }
  getStudent() {
    return this.student;
  }

  setStudentQueryModel(student: Student) {
    this.studentQueryModel = student;
  }

  getStudentQueryModel() {
    if (!this.studentQueryModel) {
      this.studentQueryModel = new Student();
    }
    return this.studentQueryModel;
  }
  set StudentModel(student: Student) {
    this.studentQueryModel = student;
  }

  get StudentModel() {
    if (!this.studentQueryModel) {
      this.studentQueryModel = new Student();
    }
    return this.studentQueryModel;
  }

  init() {
    this.order = new Order();
    this.student = null;
    this.studentQueryModel = new Student();
  }
}
