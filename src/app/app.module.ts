import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { InputXhComponent } from "./wizards/input-xh/input-xh.component";
import { InputOrderComponent } from './wizards/input-order/input-order.component';
import { ConfirmOrderComponent } from './wizards/confirm-order/confirm-order.component';
import { ApplyDataService } from './data.service';

import { HttpClientModule } from "@angular/common/http";
import { SelectItemComponent } from './wizards/select-item/select-item.component';
import { HomeComponent } from './home/home.component';
import { OrderComplatedComponent } from './wizards/order-complated/order-complated.component';

import { QRCodeModule } from 'angular2-qrcode';
import { NewOrderComponent } from './new-order/new-order.component';
import { FindOrderComponent } from './wizards/find-order/find-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { ControlOrderInfoComponent } from './wizards/order-info/order-info.component';
import { ScanCodeComponent } from './wizards/scan-code/scan-code.component';
import { ConverComponent } from './wizards/conver/conver.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ManagerComponent } from './manager/manager.component';
import { ApplyComponent } from './apply/apply.component';

import { AgGridModule } from 'ag-grid-angular';
import { ProductsComponent } from './manager/products/products.component';
import { ProductEditComponent } from './manager/products/product-edit/product-edit.component';
import { ManagerMenuComponent } from './manager/manager-menu/manager-menu.component';
import { OrdersComponent } from './manager/orders/orders.component';
import { OrderEditComponent } from './manager/orders/order-edit/order-edit.component';
import { OpenCloseComponent } from './manager/orders/order-input/order-input.component';
import { ProductListComponent } from './product-list/product-list.component';




@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "manager", component: ManagerComponent },
      { path: "apply", component: ApplyComponent },
      { path: "new", component: NewOrderComponent },
      { path: "edit", component: EditOrderComponent },
    ]),
    QRCodeModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    InputXhComponent,
    InputOrderComponent,
    ConfirmOrderComponent,
    SelectItemComponent,
    HomeComponent,
    OrderComplatedComponent,
    NewOrderComponent,
    FindOrderComponent,
    EditOrderComponent,
    ControlOrderInfoComponent,
    ScanCodeComponent,
    ConverComponent,
    OrderListComponent,
    ManagerComponent,
    ApplyComponent,
    ProductsComponent,
    ProductEditComponent,
    ManagerMenuComponent,
    OrdersComponent,
    OrderEditComponent,    
    OpenCloseComponent, ProductListComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    ApplyDataService,
    { 
      provide: APP_BASE_HREF,
      useValue: '/' 
      //useValue: environment.publicBase //'/ap'       
      //useFactory: () => getBaseUrl()
    }
  ]
})
export class AppModule { }
