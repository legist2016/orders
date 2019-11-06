import { Component, OnInit } from '@angular/core';
import { ManagerDataService } from "../data.service";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(public ds: ManagerDataService) { }

  ngOnInit() {
  }

  getOrderList(){    

  }

}
