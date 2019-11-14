import { Component, OnInit } from '@angular/core';
import { ManagerDataService } from '../data.service';
import { Product } from '../wizards/order';
import { resolve } from 'url';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public ds: ManagerDataService) { }

  columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: '名称', field: 'name' },
    { headerName: '价格', field: 'price' },
    { headerName: '描述', field: 'description' },
  ]

  newProduct: Product = null
  editProduct: Product = null
  gridApi
  resolve
  reject
  ngOnInit() {
  }

  gridReady(param) {
    this.gridApi = param.api
  }

  new() {
    this.newProduct = new Product()
  }

  onNewProductSave(product) {
    console.log(product)
    this.ds.postProduct(product)
      .then(data => {
        this.newProduct = null
        this.gridApi.updateRowData({ add: [data] })
      })
      .catch(err => {
        window.alert(err.message)
      })

  }

  onRowDbclick(event) {

      this.editProduct = Object.assign({}, event.data)
      this.resolve = product => {
        if (product) {
          this.ds.putProduct(product)
            .then(data => {
              event.node.setData(product)
              this.editProduct = null
              this.resolve = null
            })
            .catch(err => {
              window.alert(err.message)
            })
        } else {
          this.editProduct = null
        }
      }

  }
  onEditProductSave(product) {
    this.resolve && this.resolve(product)
  }

}
