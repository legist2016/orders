import { Component, OnInit } from "@angular/core";
//import { DataService } from "../../data.service";
import { Wizard } from "../wizard";

@Component({
  selector: "app-input-xh",
  templateUrl: "./input-xh.component.html",
  styleUrls: ["./input-xh.component.css"]
})
export class InputXhComponent extends Wizard {
  constructor(
    //public ds: DataService
    ) {
    super();
  }

  get diagnostic() {
    return JSON.stringify(this.ds.model);
  }
}
