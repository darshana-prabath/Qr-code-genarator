import { Component } from '@angular/core';
import{ SafeValue} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='qr code generator';
  qrdata='hellow1234';
  qrcodedownloadlink: SafeValue = '';

onchange(url: SafeValue){
 this.qrcodedownloadlink = url;
 
}


}
