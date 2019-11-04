import { Component, OnInit,Input } from '@angular/core';
import { Order } from '../order';


@Component({
  selector: 'app-control-order-info',
  templateUrl: './control-order-info.component.html',
  styleUrls: ['./control-order-info.component.css']
})
export class ControlOrderInfoComponent implements OnInit {
  @Input() order:Order
  @Input() mode:string = "show"

  constructor() { }

  ngOnInit() {
  }

}
