import { Component, OnInit, Input } from '@angular/core';
import { Wizard } from "../wizard";

@Component({
  selector: 'app-order-complated',
  templateUrl: './order-complated.component.html',
  styleUrls: ['./order-complated.component.css'],
})
export class OrderComplatedComponent extends Wizard implements OnInit {
  @Input() complatedRouterLink
  constructor() { super()}

  ngOnInit() {
  }

}