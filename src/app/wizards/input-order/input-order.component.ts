import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-input-order",
  templateUrl: "./input-order.component.html",
  styleUrls: ["./input-order.component.css"]
})
export class InputOrderComponent implements OnInit {
  xh;
  constructor(private router: Router) {}

  ngOnInit() {}
  ok() {
    this.router.navigateByUrl("/confirm-order");
  }
  return() {
    this.router.navigateByUrl("/");
  }
}
