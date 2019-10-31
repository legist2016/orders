import { Component, OnInit, OnDestroy } from '@angular/core';
import { Wizard } from "../wizard";
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-find-order',
  templateUrl: './find-order.component.html',
  styleUrls: ['./find-order.component.css']
})
export class FindOrderComponent extends Wizard implements OnInit {
  inputText = ''
  orderKey = ''

  constructor(private eventManager: EventManager) {
    super();

  }

  ngOnInit() {
    this.eventManager.addGlobalEventListener('window','keypress',(event)=>{
      if(event.key == "Enter"){
        let res = /order:\/\/([a-f0-9]+)$/.exec(this.inputText)        
        console.log(this.inputText)
        this.inputText = ''
        if(res){
          console.log('findOrder("',res[1],'")')
          this.orderKey = res[1]
        }
      }else{
        this.inputText +=  event.key
      }      
    });
  }

}
