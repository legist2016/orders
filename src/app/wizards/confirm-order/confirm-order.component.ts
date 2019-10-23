import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {
  favoriteColorControl = new FormControl('');
  favoriteColor = '';
  hero = {name:'',power:''}
  power= new FormControl(this.hero.power, Validators.required)
  constructor() { }

  ngOnInit() {
    
      

  }

}