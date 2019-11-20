import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { ManagerDataService } from '../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit { 

  @Output() ok = new EventEmitter()
  @Output() close = new EventEmitter()

  //@Input() ds
  @Input() productState

  constructor(public ds:ManagerDataService) { 

  }

  ngOnInit() {
    this.ds.LoadProductList(this.productState).then(()=>{
      //this.products = this.ds.products
    })
  }
  select(product){
    this.ok.emit()
  }

}
