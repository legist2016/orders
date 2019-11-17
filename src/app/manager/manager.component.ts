import { Component, OnInit } from '@angular/core';
import { ManagerDataService } from "../data.service";
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

  constructor(public ds: ManagerDataService) { }

  ngOnInit() {
  }

  loadData() {
    this.ds.loadOrderList(null)
      .then(() => {
        this.rowData = this.ds.model.orderList.orders;
        console.log(this.rowData)
      })
  }

  stateText(params){
    return params.data.stateText()
  }

  title = 'app';
  columnDefs = [
    { headerName: '申请状态', field: 'state', valueFormatter: this.stateText},
    { headerName: '姓名', field: 'xm' },
    { headerName: '学号', field: 'xh' },
    { headerName: '出生日期', field: 'csrq' },
  ]
  rowData = []

  
  openrow(event){
    console.log(event)
  }

}
