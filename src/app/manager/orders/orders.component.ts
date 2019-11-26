import { Component, OnInit, Input } from '@angular/core';
import { ApplyDataService, catcherr } from 'src/app/data.service';
import { localeText } from 'src/app/aggrid.localtext';
import { StateFilter, StateCellRenderer } from './state-fliter';
import { OrderState } from 'src/app/wizards/order';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(public ds: ApplyDataService) { }

  @Input() states

  localeText = localeText
  editOrder = null
  newOrder = null
  gridApi
  qrcode
  flows

  ngOnInit() {
    this.ds.init()
    if (this.states) {
      this.ds.loadOrderList(this.states)
    } else {
      this.ds.loadOrderList()
    }
    this.ds.LoadProductList(2);
  }

  stateText(params) {
    return params.data.stateText()
  }



  columnDefs = [
    {
      headerName: '编号', field: 'id',
      width: 150 //, checkboxSelection: true
    },
    {
      headerName: '申请状态', field: 'state',
      width: 120, 
      valueFormatter: this.stateText, 
      sortable: false, filter: StateFilter,
      cellRenderer:StateCellRenderer
    },
    { headerName: '学号', field: 'xh', width: 100 },
    { headerName: '姓名', field: 'xm', width: 100, },
    { headerName: '性别', field: 'xb', width: 60, },
    { headerName: '出生日期', field: 'csrq', width: 100 },
    { headerName: '院系', field: 'yx' },
    { headerName: '专业', field: 'zy' },
    { headerName: '入学时间', field: 'rxsj', width: 100 },
    { headerName: '毕业时间', field: 'bysj', width: 100 },
    { headerName: '联系人', field: 'lxr', width: 100 },
    { headerName: '联系电话', field: 'lxdh', width: 100 },
  ]

  resolve

  onRowDbclick(event) {
    let order = event.data
    this.ds.init()
    this.ds.findOrder(order.id, order.key,
      (data) => {
        this.editOrder = true
      })
    this.resolve = order => {
      if (order) {
        event.node.setData(order)
        this.editOrder = null
        this.resolve = null
      }
    }
  }

  gridReady(param) {
    this.gridApi = param.api
  }

  refresh() {
    this.ds.orders = null;
    this.gridApi.refreshCells()
    if (this.states) {
      this.ds.loadOrderList(this.states)
    } else {
      this.ds.loadOrderList()
    }
  }

  new() {
    this.ds.newOrder()
    this.newOrder = true
  }

  del() {

  }
  OnEditSave() {
    this.editOrder = null
  }
  do(event, mode = 'new') {
    switch (event) {
      case 'next':
        this.ds.model.step += 1
        break;
      case 'prev':
        if (this.ds.model.step > 1) this.ds.model.step -= 1
        break;
      case 'submit':
        if (mode == 'new') {
          this.ds.postOrder(this.ds.order, this.ds.items,
            (data) => {
              this.ds.setOrder(data)
              this.gridApi.updateRowData({ add: [this.ds.order] });
              this.newOrder = false;
            })
        } else if (mode == 'edit') {
          this.ds.putOrder(this.ds.order, this.ds.items,
            (data) => {
              this.ds.order.state = 2
              this.resolve(this.ds.order)
            })
        }
        break;
      default:
        window.alert(event)
    }
    console.log(event)

  }

  setState(state: number) {
    if (window.confirm(`是否将此申请设置为【${OrderState[state]}】状态？`)) {
      this.ds.putOrderState(this.ds.order, state,
        () => {
          this.ds.order.state = state
          this.resolve(this.ds.order)
        })
    }
  }

}
