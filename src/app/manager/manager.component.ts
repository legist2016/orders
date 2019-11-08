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

  title = 'app';

  columnDefs = [
      {headerName: '姓名', field: 'xm' },
      {headerName: '学号', field: 'xh' },
      {headerName: '出生日期', field: 'csrq'}
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

}
