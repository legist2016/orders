import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  
  constructor(private http: HttpClient) {}

  getStudentInfo(xh,xm){
    return this.http.get("/assets/student.json")
  }

}