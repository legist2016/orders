import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";


@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  constructor(public ds: DataService) { }

  ngOnInit() {
  }

  do(event){
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
    console.log(event)

  }
}
