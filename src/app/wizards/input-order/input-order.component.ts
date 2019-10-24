import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../data.service";

@Component({
  selector: "app-input-order",
  templateUrl: "./input-order.component.html",
  styleUrls: ["./input-order.component.css"]
})
export class InputOrderComponent implements OnInit {
  order;
  constructor(private router: Router,private dataService: DataService) {
    this.order = this.dataService.getOrder()
  }

  ngOnInit() {
    
  }
  ok() {
    this.router.navigateByUrl("/confirm-order");
  }
  return() {
    this.router.navigateByUrl("/");
  }
}
