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

  }
}
