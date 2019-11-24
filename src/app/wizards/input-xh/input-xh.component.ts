import { Component, OnInit,Input } from "@angular/core";
//import { ApplyDataService } from "../../data.service";
import { Wizard } from "../wizard";

@Component({
  selector: "app-input-xh",
  templateUrl: "./input-xh.component.html",
  styleUrls: ["./input-xh.component.css"]
})
export class InputXhComponent extends Wizard {

  @Input() xmRequired = true

  constructor(
    //public ds: ApplyDataService
    ) {
    super();
  }

  get diagnostic() {
    return JSON.stringify(this.ds.model);
  }
}
