import { Component, OnInit, Input } from '@angular/core';
import { Wizard } from "../wizard";
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-find-order',
  templateUrl: './find-order.component.html',
  styleUrls: ['./find-order.component.css']
})
export class FindOrderComponent extends Wizard implements OnInit {

  constructor(private eventManager: EventManager) {
    super();

  }

  ngOnInit() { }

  onScan(event) {
    let res = /order:\/\/([a-f0-9]+)$/.exec(event)
    if (res) {
      console.log('findOrder("' + res[1] + '")')
      this.ds.findOrder(res[1])
    }
  }

}
