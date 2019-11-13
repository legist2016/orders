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

  constructor(public ds:ManagerDataService) { }

  columnDefs=[
    { headerName: 'ID', field: 'id' },
    { headerName: '名称', field: 'name' },
    { headerName: '价格', field: 'price' },
    { headerName: '描述', field: 'description' },
  ]

  newProduct:Product = null
  editProduct:Product = null
  gridApi
  resolve
  reject
  ngOnInit() {
  }

  gridReady(param){
    this.gridApi= param.api
  }

  new(){
    this.newProduct=new Product()
  }

  onNewProductSave(data){
    this.newProduct = null
    this.ds.products.push(Object.assign(new Product(), data))
    this.gridApi.redrawRows();
  }

  onRowDbclick(event){
    console.log(event)
    let component = this
    new Promise(((resolve,reject)=>{
      this.resolve = resolve
      this.reject = reject
      this.editProduct = Object.assign({},event.data)
      //this.editProduct = event.data
    }).bind(this))
    .then(data=>{
      this.editProduct = null
      
      event.node.setData(data)
      //this.gridApi.redrawRows();
      this.ds.products[event.rowIndex] = Object.assign(new Product(), data)
      console.log(this.ds.products)
    })
    .catch(err=>{

    })
  }
  onEditProductSave(product){
    this.resolve && this.resolve(product)
  }

}
