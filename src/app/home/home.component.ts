import { Component, OnInit } from '@angular/core';
import { ApplyDataService } from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show = 1
  constructor(public ds:ApplyDataService) { }

  ngOnInit() {
  }

}