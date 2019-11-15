import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-manager-menu',
  templateUrl: './manager-menu.component.html',
  styleUrls: ['./manager-menu.component.scss']
})
export class ManagerMenuComponent implements OnInit {
  @Output() menu = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  do(something){
    this.menu.emit(something)
  }

}
