import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { InputXhComponent } from "./wizards/input-xh/input-xh.component";
import { InputOrderComponent } from './wizards/input-order/input-order.component';
import { ConfirmOrderComponent } from './wizards/confirm-order/confirm-order.component';
import { DataService } from './data.service';

import { HttpClientModule } from "@angular/common/http";
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: InputXhComponent },
      { path: "input-order", component: InputOrderComponent },
      { path: "confirm-order", component: ConfirmOrderComponent },
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    InputXhComponent,
    InputOrderComponent,
    ConfirmOrderComponent,
    HeroFormComponent
  ],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule {}
