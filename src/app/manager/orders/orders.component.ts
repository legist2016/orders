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
      headerName: '申请状态', field: 'state', valueFormatter: this.stateText, sortable: false, filter: StateFilter,
      width:100,checkboxSelection: true
    },
    { headerName: '姓名', field: 'xm' },
    { headerName: '学号', field: 'xh' },
    { headerName: '出生日期', field: 'csrq' },
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
  OnEditSave(){
    this.editOrder = null
  }
}
