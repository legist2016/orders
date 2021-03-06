import { Component, OnInit, Input } from '@angular/core';
import { ApplyDataService } from '../data.service';
import { OrderItem } from '../wizards/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(public ds: ApplyDataService) { }
  //productSelector = 0
  //product = null
  @Input() productState = 2
  items = []
  readonly = true


  ngOnInit() {
    /*this.ds.LoadProductList(this.productState).then(() => {
    })*/
    this.ds.newOrder()
  }
  /*
  addProduct() {
    this.productSelector = 1
  }

  /*ok(product) {
    /*let item = this.items.find(item => item.productId == product.id)
    if (item) { 
      item.count ++;
    }
    else {
      this.items.push(new OrderItem(product.name, product.id, 1, product.price))
    }
    this.items.api && this.items.api.add(product)
    this.productSelector = 0
  }

  close() {
    this.productSelector = 0
  }
*/
}
