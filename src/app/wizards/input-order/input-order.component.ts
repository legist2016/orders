import { Component, OnInit } from "@angular/core";
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
  constructor(
    //public ds: ApplyDataService
  ) {
    super()
  }

  ngOnInit() { }
}
