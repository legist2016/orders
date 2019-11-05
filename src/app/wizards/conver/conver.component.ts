import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-conver',
  templateUrl: './conver.component.html',
  styleUrls: ['./conver.component.css']
})
export class ConverComponent implements OnInit {
  @Input() message
  constructor() { }

  ngOnInit() {
  }

}
