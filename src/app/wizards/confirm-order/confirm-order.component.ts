import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";

@Component({
  selector: "app-confirm-order",
  templateUrl: "./confirm-order.component.html",
  styleUrls: ["./confirm-order.component.css"]
})
export class ConfirmOrderComponent implements OnInit {
  constructor(public ds: DataService) {}

  ngOnInit() {}
  get diagnostic() {
    return JSON.stringify(this.ds.model);
  }
}

