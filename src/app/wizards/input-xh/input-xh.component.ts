import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DataService } from "../../data.service";

@Component({
  selector: "app-input-xh",
  templateUrl: "./input-xh.component.html",
  styleUrls: ["./input-xh.component.css"]
})
export class InputXhComponent {
  model = {xh:'',xm:''}
  student;
  doing = false;
  message
  constructor(private router: Router, private dataService: DataService) {}

  next(){
    this.router.navigateByUrl('/input-order')
  }
  ok(xh,xm) {
    this.doing = true;
    this.student = 0;
    this.message = 0;
    //this.router.navigateByUrl('/input-order')
    this.dataService
      .getStudentInfo(xh,xm)
      .toPromise<any>()
      .then(data => {
        this.doing=false;
        if(data.xm && data.xm==xm){
        this.student = data;
        }else{
          this.message = "填写的信息无效。";
        }
      })
      .catch(err=>{
        this.doing=false;
        this.message=err.message
        console.log(err)
      });
  }
}
