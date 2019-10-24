import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Order } from "./wizards/order"

@Injectable({
  providedIn: "root"
})
export class DataService {
  order:Order
  constructor(private http: HttpClient) {}

  getStudentInfo(xh,xm){
    return this.http.get("/assets/student.json")
  }

  setOrder(order:Order){
    this.order = order;
  }

  getOrder(){
    return this.order
  }

}