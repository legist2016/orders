import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { InputXhComponent } from "./wizards/input-xh/input-xh.component";
import { InputOrderComponent } from './wizards/input-order/input-order.component';
import { ConfirmOrderComponent } from './wizards/confirm-order/confirm-order.component';
import { DataService } from './data.service';

import { HttpClientModule } from "@angular/common/http";
import { HeroFormComponent } from './hero-form/hero-form.component';
import { SelectItemComponent } from './wizards/select-item/select-item.component';
import { HomeComponent } from './home/home.component';
import { OrderComplatedComponent } from './wizards/order-complated/order-complated.component';

import { QRCodeModule } from 'angular2-qrcode';
import { NewOrderComponent } from './new-order/new-order.component';
import { FindOrderComponent } from './wizards/find-order/find-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { ControlOrderInfoComponent } from './wizards/control-order-info/control-order-info.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "new", component: NewOrderComponent },
      { path: "edit", component: EditOrderComponent },
    ]),
    QRCodeModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    InputXhComponent,
    InputOrderComponent,
    ConfirmOrderComponent,
    HeroFormComponent,
    SelectItemComponent,
    HomeComponent,
    OrderComplatedComponent,
    NewOrderComponent,
    FindOrderComponent,
    EditOrderComponent,
    ControlOrderInfoComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    DataService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppModule { }
