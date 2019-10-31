import { Component, OnInit } from "@angular/core";
//import { DataService } from "../../data.service";
import { Wizard } from "../wizard";
@Component({
  selector: "app-confirm-order",
  templateUrl: "./confirm-order.component.html",
  styleUrls: ["./confirm-order.component.css"]
})
export class ConfirmOrderComponent extends Wizard implements OnInit {
  constructor(
    //public ds: DataService
    ) {super()}

  ngOnInit() {}
}

