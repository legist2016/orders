import { Component, OnInit, OnDestroy, Input,Output, EventEmitter } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-scan-code',
  templateUrl: './scan-code.component.html',
  styleUrls: ['./scan-code.component.css']
})
export class ScanCodeComponent implements OnInit, OnDestroy {
  inputText = ''
  orderKey = ''
  removeEventListener
  @Output() scan = new EventEmitter()
  @Input() message


  ngOnDestroy(): void {
    this.removeEventListener()
  }

  constructor(private eventManager: EventManager) { }

  ngOnInit() {
    this.removeEventListener = this.eventManager.addGlobalEventListener('window', 'keypress', (event) => {
      if (event.key == "Enter") {
        /*let res = /order:\/\/([a-f0-9]+)$/.exec(this.inputText)
        //console.log(this.inputText)
        this.inputText = ''
        if (res) {
          //console.log('findOrder("', res[1], '")')
          this.orderKey = res[1]
          //this.ds.findOrder(res[1])
          
        }*/
        //console.log(this.inputText)
        this.scan.emit(this.inputText)
        this.inputText = ''
      } else {
        this.inputText += event.key
      }
    });
  }

}
