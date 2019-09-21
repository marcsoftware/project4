import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn';
  math = Math;// hack since angular does not recognize Math on the html page,
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
 page_length=6;
 image_template="../assets/mnemonic/NAME.PNG";
 image="../assets/mnemonic/a.PNG";

   dict={
    'あ':'a',
    'い':'i',
    'う':'u',
    'え':'e',
    'お':'o',
    'か':'ka',
    'き':'ki',
    'く':'ku',
    'け':'ke',
    'こ':'ko',
    'さ':'sa',
    'し':'shi',
    'す':'su',
    'せ':'se',
    'そ':'so',
    'た':'ta',
    'ち':'chi',
    'つ':'tsu',
    'て':'te',
    'と':'to',
    'な':'na',
    'に':'ni',
    'ぬ':'nu',
    'ね':'ne',
    'の':'no',
    'は':'ha',
    'ひ':'hi',
    'ふ':'fu',
    'へ':'he',
    'ほ':'ho',
    'ま':'ma',
    'み':'mi',
    'む':'mu',
    'め':'me',
    'も':'mo',
    'や':'ya',
    'ゆ':'yu',
    'よ':'yo',
    'ら':'ra',
    'り':'ri',
    'る':'ru',
    'れ':'re',
    'ろ':'ro',
    'わ':'wa',
    'を':'wo',
    'ん':'nn',

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
    this.question=this.page[this.count];
    this.ans_key=this.dict[this.question];
    this.image = this.image_template.replace("NAME",this.ans_key);
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

        this.count=0;
        this.shufflePage();
      }
      this.drawQuestion();
  }

  // creates page
  // the page is a shorter list of question, that the user can
  // master before going to the next page.
  createPage(base: number=0){
    console.log(base);
    this.page=this.problem_set.slice(base,base+6);
    this.shufflePage();

  }

  shufflePage(){
    this.page.sort(() => Math.random() - 0.5);
  }


  // extract all question from dictionary for easier manipulation by programmer
  getAllQuestions(){

      for(var key in this.dict) {

        this.problem_set.push(key);

      }
  }

  nextPage(){
    this.page_count++;
    this.createPage(this.page_count*this.page_length);
    this.drawQuestion();
  }

}


