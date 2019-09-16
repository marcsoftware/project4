import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn';

   dict={
    'a':'あ ',
    'ka':'か ',
    'sa':'さ ',
    'ta':'た ',
    'na':'な ',
    'ha':'は ',
    'ma':'ま ',
    'ya':'や ',
    'ra':'ら ',
    'wa':'わ ',
    'ga':'が ',
    'za':'ざ ',
    'da':'だ ',
    'ba':'ば ',
    'pa':'ぱ'

  }

  checkInput(){
    console.log(1);
  }

}


