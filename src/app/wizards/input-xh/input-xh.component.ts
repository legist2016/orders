import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DataService } from "../../data.service";

@Component({
  selector: "app-input-xh",
  templateUrl: "./input-xh.component.html",
  styleUrls: ["./input-xh.component.css"]
})
export class InputXhComponent implements OnInit {
  student;
  doing = false;
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {}
  ok() {
    this.doing = true;
    this.student = 0;
    //this.router.navigateByUrl('/input-order')
    this.dataService
      .getStudentInfo()
      .toPromise<any>()
      .then(data => {
        this.student = data;
        this.doing=false;
      })
      .catch(err=>{
        this.doing=false;
      });
  }
}
