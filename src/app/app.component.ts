import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn';

  question :string;
  feedback :any;

   dict={
    'a':'あ',
    'ka':'か',
    'sa':'さ',
    'ta':'た',
    'na':'な',
    'ha':'は',
    'ma':'ま',
    'ya':'や',
    'ra':'ら',
    'wa':'わ',
    'ga':'が',
    'za':'ざ',
    'da':'だ',
    'ba':'ば',
    'pa':'ぱ'

  }


  ngOnInit() {
      this.drawQuestion();
  }

  drawQuestion(){

    this.question='あ';
  }
  checkInput(event: any){
    let user_input=event.target.value;
    this.feedback=this.dict[user_input]===this.question;

  }

}


