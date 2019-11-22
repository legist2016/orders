import { Component, OnInit } from '@angular/core';
import { ApplyDataService,catcherr } from "../data.service";


@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  constructor(public ds: ApplyDataService) { }

  ngOnInit() {
    this.ds.init()
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
        this.ds.putOrder(this.ds.order, this.ds.items).then(() => {
          this.do('next')
        }, catcherr)
        break;
      default:
        window.alert(event)
    }
    console.log(event)

  }
}
