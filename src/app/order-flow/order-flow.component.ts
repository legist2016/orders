import { Component, OnInit ,Input} from '@angular/core';
import { OrderState } from '../wizards/order';

@Component({
  selector: 'app-order-flow',
  templateUrl: './order-flow.component.html',
  styleUrls: ['./order-flow.component.scss']
})
export class OrderFlowComponent implements OnInit {
  @Input()flows
  constructor() { }

  ngOnInit() {
  }

  flowTo(state){
    //console.log(OrderState,state,OrderState[state])
    return OrderState[state]
  }

}
