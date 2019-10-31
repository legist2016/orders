import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  constructor(public ds: DataService) { }

  ngOnInit() {
    this.ds.init()
  }
  do(event) {
    switch (event) {
      case 'next':
        this.ds.model.step += 1
        break;
      case 'prev':
        if(this.ds.model.step>1)this.ds.model.step -= 1
        break;
      default:
        window.alert(event)
    }

  }
}