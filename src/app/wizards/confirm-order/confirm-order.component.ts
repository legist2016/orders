import { Component, OnInit } from '@angular/core';
import { FormControl,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {
heroForm
hero = {name:''}
  constructor() { }

  ngOnInit() {
  this.heroForm = new FormGroup({
  
  'name': new FormControl(this.hero.name, Validators.required)})    
      

  }
onSubmit(){
  window.alert(0)
}
}