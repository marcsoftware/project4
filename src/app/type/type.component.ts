import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import data from '../../data/japanese.json';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})

export class TypeComponent implements OnInit {
subject;
constructor(private route: ActivatedRoute) { }

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
page_length=5;
image_template="../../assets/mnemonic/NAME.PNG";
image="../assets/mnemonic/a.PNG";
auto_turn=true;
dict;


  ngOnInit() {
    this.subject = this.route.snapshot.paramMap.get("subject");

    if(!this.subject){
      this.dict=data[this.subject];
    }else{
      this.dict=data['easy'];
    }

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
        if(this.auto_turn){

          this.nextPage();
        }else{
          this.count=0;
          this.shufflePage();
        }
      }
      this.drawQuestion();
  }

  // creates page
  // the page is a shorter list of question, that the user can
  // master before going to the next page.
  createPage(base: number=0){
    console.log(base);
    this.page=this.problem_set.slice(base,base+this.page_length);
    this.shufflePage();

  }

  shufflePage(){
    this.page.sort(() => Math.random() - 0.5);
  }

  settings(event: any){

      this.auto_turn=event.target.checked;
  }

  // extract all question from dictionary for easier manipulation by programmer
  getAllQuestions(){

      for(var key in this.dict) {

        this.problem_set.push(key);

      }

      //this.problem_set=this.problem_set.reverse();
      //this.problem_set=this.problem_set.sort(() => Math.random() - 0.5);
  }

  nextPage(){
    this.count=0;
    this.page_count++;
    this.createPage(this.page_count*this.page_length);
    this.drawQuestion();
  }

}


