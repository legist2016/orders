import { Component, OnInit } from '@angular/core';
import { Wizard } from "../wizard";

@Component({
  selector: 'app-order-complated',
  templateUrl: './order-complated.component.html',
  styleUrls: ['./order-complated.component.css'],
})
export class OrderComplatedComponent extends Wizard implements OnInit {

  constructor() { super()}

  ngOnInit() {
  }

}