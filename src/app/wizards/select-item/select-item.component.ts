import { Component, OnInit } from "@angular/core";
//import { DataService } from "../../data.service";
import { Wizard } from "../wizard";
@Component({
  selector: "app-select-item",
  templateUrl: "./select-item.component.html",
  styleUrls: ["./select-item.component.css"]
})
export class SelectItemComponent extends Wizard implements OnInit {
  constructor(
    //public ds: DataService
  ) {
    super()
  }

  ngOnInit() { }

}

