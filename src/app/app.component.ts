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
  problem_set =[];
  page=[];
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
      this.getAllQuestions();
      this.createPage();
      this.drawQuestion();
  }

  //displays question to user
  drawQuestion(){

    this.question='あ';
  }

  //check users input, and five user right/wrong feedback
  checkInput(event: any){
    let user_input=event.target.value;
    this.feedback=this.dict[user_input]===this.question;
  }

  // creates page
  // the page is a shorter list of question, that the user can
  // master before going to the next page.
  createPage(base: number=0){
    this.page=this.problem_set.slice(base,base+6);
    console.log(this.page);
  }

  // extract all question from dictionary for easier manipulation by programmer
  getAllQuestions(){

    for(var key in this.dict) {
        var value = this.dict[key];
       this.problem_set.push(value);

    }


  }

}


