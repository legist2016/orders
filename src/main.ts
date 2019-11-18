import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));


/*
function get(params:any){
  return function(target:any,methodName:any,desc:any){
      console.log(target);
      console.log(methodName);
      console.log(desc);       
      
      //修改装饰器的方法  把装饰器方法里面传入的所有参数改为string类型

      //1、保存当前的方法

      var oMethod=desc.value;
      desc.value=function(...args){ 
        console.log('我是@get里面的方法',args, params);
          console.log('return',oMethod.apply(this,args))
      }

  }
}

class HttpClient{  
  public url:any |undefined;
  constructor(){
  }
  @get('http://www.itying,com')
  getData(a,b){
      console.log(a,b);
      console.log('我是getData里面的方法');
      return "4444444444"
  }
}

var http=new HttpClient();
http.getData(123,'xxx');
*/