import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-window-confirm',
  templateUrl: './window-confirm.component.html',
  styleUrls: ['./window-confirm.component.scss']
})
export class WindowConfirmComponent implements OnInit {
  messages = []
  buttons
  constructor() {
    window.alert = (msg) => this.alert(msg)
    window.confirm = (msg) => this.alert(msg)
  }

  alert(msg) {
    //this.message = this.message && this.message!=msg && this.message+'\n'+msg || msg
    console.log(msg)
    if (!msg) return false
    if (msg.constructor === String) {
      this.buttons = [
        { text: "确定", action: () => { this.close() } }
      ]
    } else {
      this.buttons = msg.buttons.map(b => {
        return {
          text: b.text,
          action: () => { 
            if(b.action)b.action()
            this.close()
          }
        }
      }
      )
      msg = msg.msg
    }
    if (!this.messages.includes(msg))
      this.messages.push(msg)
    return false;
  }

  ngOnInit() {
  }

  close() {
    this.messages = []
  }
  message() {
    return this.messages.join('\n')
  }

}
