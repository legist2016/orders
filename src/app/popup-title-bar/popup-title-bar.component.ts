import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-popup-title-bar',
  templateUrl: './popup-title-bar.component.html',
  styleUrls: ['./popup-title-bar.component.scss']
})
export class PopupTitleBarComponent implements OnInit {
  @Input() routerLink
  constructor() { }
  @Output() close = new EventEmitter()
  ngOnInit() {
  }

}
