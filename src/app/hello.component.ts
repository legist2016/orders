import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-apply-top',
  template: `<div><a routerLink='/apply'>首页</a><h1>翻译中英文成绩证书申请表</h1></div><div></div>`,
  styles: [`
  div {width:800px;}
  div>h1 { font-family: Lato; float:left}
  a {float:right;color:blue;font-size:20px;margin:10px}
  div + div{clear:both;}
  `]
})
export class HelloComponent  {
  
}
