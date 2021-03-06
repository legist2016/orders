import { Component, OnInit,Input } from '@angular/core';
import { Order } from '../order';


@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class ControlOrderInfoComponent implements OnInit {
  @Input() order:Order
  @Input() items
  @Input() products
  @Input() mode:string = "show"
  @Input() state:string = ''

  constructor() { }

  ngOnInit() {
    
  }

}
