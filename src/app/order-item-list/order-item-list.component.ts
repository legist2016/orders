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
    this.items.api = {
      add: function (product) {
        let item = this.find(item => item.productId == product.id)
        if (item) {
          item.count++;
        }
        else {
          this.push(new OrderItem(product.name, product.id, 1, product.price))
        }
      }.bind(this.items),
      delete: function (item) {
        if (window.confirm(`是否删除项目：${item.name}（${item.count}份）？`)) {
          let index = this.findIndex(i => i == item)
          console.log(item, index)
          if (index >= 0) {
            this.splice(index, 1)
          }
        }
      }.bind(this.items)
    }

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
