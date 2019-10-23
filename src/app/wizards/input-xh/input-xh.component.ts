import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DataService } from "../../data.service";

@Component({
  selector: "app-input-xh",
  templateUrl: "./input-xh.component.html",
  styleUrls: ["./input-xh.component.css"]
})
export class InputXhComponent implements OnInit {
  xh
  xm
  student;
  doing = false;
  message
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {}
  next(){
    this.router.navigateByUrl('/input-order')
  }
  ok() {
    this.doing = true;
    this.student = 0;
    this.message = 0;
    //this.router.navigateByUrl('/input-order')
    this.dataService
      .getStudentInfo(this.xh,this.xm)
      .toPromise<any>()
      .then(data => {
        this.student = data;
        this.doing=false;
      })
      .catch(err=>{
        this.doing=false;
        this.message=err.message
        console.log(err)
      });
  }
}
