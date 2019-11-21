import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.scss']
})
export class ProductSelectorComponent implements OnInit { 

  @Output() ok = new EventEmitter()
  @Output() close = new EventEmitter()

  //@Input() ds
  @Input() productState
  @Input()products

  constructor() { 

  }

  ngOnInit() {
    /*this.ds.LoadProductList(this.productState).then(()=>{
      //this.products = this.ds.products
    })*/
  }

}
