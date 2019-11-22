import { Component, OnInit } from '@angular/core';
import { ManagerDataService } from 'src/app/data.service';
import { localeText } from 'src/app/aggrid.localtext';
import { StateFilter } from './state-fliter';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(public ds: ManagerDataService) { }

  localeText = localeText
  editOrder = null

  ngOnInit() {
    this.ds.loadOrderList()
  }

  stateText(params) {
    return params.data.stateText()
  }

  columnDefs = [
    {
      headerName: '编号', field: 'id',
      width: 150, checkboxSelection: true
    },
    {
      headerName: '申请状态', field: 'state',
      width: 100, valueFormatter: this.stateText, sortable: false, filter: StateFilter
    },
    { headerName: '姓名', field: 'xm',width: 100, },
    { headerName: '学号', field: 'xh',width: 100 },
    { headerName: '出生日期', field: 'csrq',width: 100 },
  ]

  onRowDbclick(event) {
    this.editOrder = Object.assign({}, event.data)
  }

  refresh() {

  }

  new() {

  }

  del() {

  }
  OnEditSave() {
    this.editOrder = null
  }
}
