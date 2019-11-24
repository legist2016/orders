import { Component, OnInit } from '@angular/core';
import { ManagerDataService, ApplyDataService, catcherr } from 'src/app/data.service';
import { localeText } from 'src/app/aggrid.localtext';
import { StateFilter } from './state-fliter';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(public ds: ApplyDataService) { }

  localeText = localeText
  editOrder = null
  newOrder = null
  gridApi

  ngOnInit() {
    this.ds.loadOrderList()
    this.ds.LoadProductList(2);
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
    { headerName: '学号', field: 'xh', width: 100 },
    { headerName: '姓名', field: 'xm', width: 100, },
    { headerName: '性别', field: 'xb', width: 100, },
    { headerName: '出生日期', field: 'csrq', width: 100 },
    { headerName: '院系', field: 'yx' },
    { headerName: '专业', field: 'zy' },
    { headerName: '入学时间', field: 'rxsj', width: 100 },
    { headerName: '毕业时间', field: 'bysj', width: 100 },
    { headerName: '联系人', field: 'lxr', width: 100 },
    { headerName: '联系电话', field: 'lxdh', width: 100 },
  ]

  onRowDbclick(event) {
    //this.editOrder = Object.assign({}, event.data)
    let order = event.data
    console.log(order)
    this.ds.findOrder(order.id, order.key)
      .then(data => {
        this.editOrder = this.ds.order
      })
  }

  gridReady(param) {
    this.gridApi = param.api
  }

  refresh() {

  }

  new() {
    this.ds.init()
    this.ds.newOrder()
    this.newOrder = true
  }

  del() {

  }
  OnEditSave() {
    this.editOrder = null
  }
  do(event) {
    switch (event) {
      case 'next':
        this.ds.model.step += 1
        break;
      case 'prev':
        if (this.ds.model.step > 1) this.ds.model.step -= 1
        break;
      case 'submit':
        this.ds.postOrder(this.ds.order, this.ds.items)
          .then((data) => {
            this.ds.setOrder(data)
            this.gridApi.updateRowData({ add: [this.ds.order] });
            this.newOrder = false;
          }, catcherr)
        break;
      default:
        window.alert(event)
    }
    console.log(event)

  }

}
