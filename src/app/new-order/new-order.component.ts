import { Component, OnInit } from '@angular/core';
import { ApplyDataService } from "../data.service";

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  constructor(public ds: ApplyDataService) { }

  ngOnInit() {
    this.ds.init()
    this.ds.LoadProductList(2)
  }
  do(event) {
    switch (event) {
      case 'next':
        this.ds.model.step += 1
        break;
      case 'prev':
        if (this.ds.model.step > 1) this.ds.model.step -= 1
        break;
      case 'submit':
        this.ds.postOrder(this.ds.order, this.ds.items, 
          //(
          (data) => {
            this.ds.setOrder(data)
            this.do('next')
          }//).bind(this)
        )
          //.then(, catcherr)
        break;
      case 'complated':
        break;
      default:
        window.alert(event)
    }
    //console.log(event)

  }
}