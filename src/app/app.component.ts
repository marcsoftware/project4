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
  count=0;
  before;
  after;
  now;
  ans_key;

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
    this.before=(this.page.slice(0,this.count)).join('<br/>');
    this.now=this.page[this.count];
    this.after=(this.page.slice(this.count+1)).join('<br/>');
    this.question=this.problem_set[this.count];
    this.ans_key=this.dict[this.question];
  }

  //check users input, and five user right/wrong feedback
  checkInput(event: any){
    let user_input=event.target.value;
    this.feedback=this.dict[user_input]===this.question;
    if(this.feedback){
      this.feedback='';
      this.count++;
      event.target.value='';
      this.drawQuestion();
    }
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


