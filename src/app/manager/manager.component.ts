import { Component, OnInit } from '@angular/core';
import { ApplyDataService } from "../data.service";
import { localeText } from "../aggrid.localtext"

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  //content="products"
  content="pending orders"

  localeText = localeText

  constructor(public ds: ApplyDataService) { }

  ngOnInit() {
  }

}
