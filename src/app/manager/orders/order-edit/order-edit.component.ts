import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  @Input() order
  @Input() items
  @Input() products

  constructor() { }

  ngOnInit() {
  }
  do(){

  }

}
