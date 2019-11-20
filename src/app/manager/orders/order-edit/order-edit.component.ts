import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  @Input() order
  @Input() items
  @Input() products
  @Output() save = new EventEmitter()
  form = {form:{valid:true}}

  constructor() { }

  ngOnInit() {
  }
  do() {
    this.save.emit()
  }

  valid(value) {
    this.form = value
    console.log(value)
  }

}
