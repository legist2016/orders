import { Component, OnInit,Input } from "@angular/core";
//import { Router } from "@angular/router";
//import { ApplyDataService } from "../../data.service";
import { Wizard } from "../wizard";


@Component({
  selector: "app-input-order",
  templateUrl: "./input-order.component.html",
  styleUrls: ["./input-order.component.css"]
})
export class InputOrderComponent extends Wizard implements OnInit {
  order;
  @Input()inputxh = false;
  constructor(
    //public ds: ApplyDataService
  ) {
    super()
  }

  ngOnInit() { }


  queryStudent(){
    this.ds.model.query.xh = this.ds.order.xh
    this.ds.model.query.xm = this.ds.order.xm
    this.ds.queryStudent()
    .then(()=>{
      this.ds.setOrder(this.ds.model.student)
    })
  }
}
