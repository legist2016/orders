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
import { ProductSelectorComponent } from './product-selector/product-selector.component';
import { OrderItemListComponent } from './order-item-list/order-item-list.component';
import { PopupComponent } from './popup/popup.component';
import { OrderFlowComponent } from './order-flow/order-flow.component';

import { environment } from '../environments/environment';
import {PathLocationStrategy, LocationStrategy,HashLocationStrategy } from '@angular/common';
import { WindowConfirmComponent } from './window-confirm/window-confirm.component';

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
      { path: "test", component: OrderListComponent },
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
    ProductSelectorComponent, OrderItemListComponent, PopupComponent, OrderFlowComponent, WindowConfirmComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    ApplyDataService,
    {
      provide: APP_BASE_HREF,
      //useValue: '/'
      useValue: environment.publicBase //'/ap'       
      //useFactory: () => getBaseUrl()
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppModule { }
