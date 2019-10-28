import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DataService } from "../../data.service";

@Component({
  selector: "app-input-xh",
  templateUrl: "./input-xh.component.html",
  styleUrls: ["./input-xh.component.css"]
})
export class InputXhComponent {
  model = this.ds.getStudentQueryModel();
  student = this.ds.getStudent();
  doing = false;
  message;
  constructor(private router: Router, private ds: DataService) {}

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  forget(){
    this.ds.setOrder(null);
  }

  next() {
    this.ds.setOrder(this.ds.Student);
    this.router.navigateByUrl("/input-order");
  }
  ok(xh, xm) {
    this.doing = true;
    this.ds.Student = null;
    this.message = 0;
    //this.router.navigateByUrl('/input-order')
    this.ds
      .getStudentInfo(xh, xm)
      .toPromise<any>()
      .then(data => {
        this.doing = false;
        this.ds.Student = data;
        return
        if (data.xm && data.xm == xm) {
          this.ds.Student = data;
          //this.ds.setStudent(this.student);
        } else {
          this.message = "填写的信息无效。";
        }
      })
      .catch(err => {
        this.doing = false;
        this.message = err.message;
        console.log(err);
      });
  }
}
