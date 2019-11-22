import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from '../wizards/order';

@Component({
  selector: 'app-order-item-list',
  templateUrl: './order-item-list.component.html',
  styleUrls: ['./order-item-list.component.scss']
})
export class OrderItemListComponent implements OnInit {

  @Input() items
  @Input() products
  @Input() readonly = true
  productSelector = 0

  constructor() { }

  ngOnInit() {

  }
  delete(item) {
    this.items.api.delete(item)
  }
  ok(product) {
    this.items.api && this.items.api.add(product)
    this.productSelector = 0
  }  
  get cost(){
    let sum = 0
    for(let item of this.items){
      sum += item.ammount
    }
    return sum
  }
}
