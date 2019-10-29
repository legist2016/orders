import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";

@Component({
  selector: "app-select-item",
  templateUrl: "./select-item.component.html",
  styleUrls: ["./select-item.component.css"]
})
export class SelectItemComponent implements OnInit {
  constructor(private ds: DataService) {}

  ngOnInit() {}
  get diagnostic() {
    return JSON.stringify(this.ds.model);
  }
}

 