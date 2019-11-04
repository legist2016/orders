import { Component, OnInit,Input } from '@angular/core';
import { Order } from '../order';


@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class ControlOrderInfoComponent implements OnInit {
  @Input() order:Order
  @Input() mode:string = "show"

  constructor() { }

  ngOnInit() {
  }

}
