import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";

@Component({
  selector: "app-input-xh",
  templateUrl: "./input-xh.component.html",
  styleUrls: ["./input-xh.component.css"]
})
export class InputXhComponent {
  constructor(public ds: DataService) {}

  get diagnostic() {
    return JSON.stringify(this.ds.model);
  }
}
