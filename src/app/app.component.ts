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
  page_count=0;

   dict={
          'あ':'a',
          'か':'ka',
          'さ':'sa',
          'た':'ta',
          'な':'na',
          'は':'ha',
          'ま':'ma',
          'や':'ya',
          'ら':'ra',
          'わ':'wa',
          'が':'ga',
          'ざ':'za',
          'だ':'da',
          'ば':'ba',
          'ぱ':'pa',
          'い':'i',
          'き':'ki',
          'し':'shi',
          'ち':'chi',
          'に':'ni',
          'ひ':'hi',
          'み':'mi',
          'り':'ri',
          'ゐ':'wi',
          'ぎ':'gi',
          'じ':'ji',
          'ぢ':'dji',
          'び':'bi',
          'ぴ':'pi',
          'う':'u',
          'く':'ku',
          'す':'su',
          'つ':'tsu',
          'ぬ':'nu',
          'ふ':'fu',
          'む':'mu',
          'ゆ':'yu',
          'る':'ru',
          'ぐ':'gu',
          'ず':'zu',
          'づ':'dzu',
          'ぶ':'bu',
          'ぷ':'pu',
          'え':'e',
          'け':'ke',
          'せ':'se',
          'て':'te',
          'ね':'ne',
          'へ':'he',
          'め':'me',
          'れ':'re',
          'ゑ':'we',
          'げ':'ge',
          'ぜ':'ze',
          'で':'de',
          'べ':'be',
          'ぺ':'pe',
          'お':'o',
          'こ':'ko',
          'そ':'so',
          'と':'to',
          'の':'no',
          'ほ':'ho',
          'も':'mo',
          'よ':'yo',
          'ろ':'ro',
          'を':'wo',
          'ご':'go',
          'ぞ':'zo',
          'ど':'do',
          'ぼ':'bo',
          'ぽ':'po',
          'ゔ':'v',
          'ん':'n'

  }


  ngOnInit() {
      this.getAllQuestions();
      this.createPage();
      this.drawQuestion();
  }

  //displays question to user
  //renders stuff on screen
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
    this.feedback=this.dict[this.question]===user_input;
    if(this.feedback){
      this.correctInput(event);
    }
  }

  //do this everytime user enter correct input
  correctInput(event){
      this.feedback='';
      this.count++;
      event.target.value=''; //clear the users input box

      if(this.count>=this.page.length){
        this.page_count++;
        this.count=0;
        this.createPage(this.page_count);
      }
      this.drawQuestion();
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

        this.problem_set.push(key);

      }

  }

}


