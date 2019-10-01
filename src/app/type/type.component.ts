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
moreFeedback:any;
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
auto_turn=false;
dict;


  ngOnInit() {
    this.subject = this.route.snapshot.paramMap.get("subject");

    if(this.subject){
      this.dict=data[this.subject];
    }else{
      this.dict=data['easy'];
    }

    if(this.subject==='radicals'){
      this.image_template="../../assets/words/NAME";
    }

    if(this.subject==='hard_v' || this.subject==='hard_c' ){
      this.image_template="../../assets/mnemonic/rules.PNG";
    }

    this.getAllQuestions();
    this.createPage();
    this.drawQuestion();
  }


//----------------------------------------------------------------
//
//----------------------------------------------------------------
  //displays question to user
  //renders stuff on screen
  image_name;
  drawQuestion(){
    this.before=(this.page.slice(0,this.count)).join('<br/>');
    this.now=this.page[this.count];
    this.after=(this.page.slice(this.count+1)).join('<br/>');
    this.question=this.page[this.count];
    this.ans_key=this.dict[this.question];

    // JSON data is in different format for RADICALS, so this if-else handles that exception

    if(typeof this.ans_key === "string"){
       this.image_name = this.ans_key.replace(/[\W].*/g,'');
       this.ans_key=this.image_name;
    }else{
       this.image_name = this.ans_key[2];
       this.ans_key= this.ans_key[0].replace(/[^a-z\ ].*/gi,'');
    }


     //TODO delete the alternative answeres !?
    this.image = this.image_template.replace("NAME",this.image_name);
  }

  //------------------------------------------------------------------
  //
  //-------------------------------------------------------------------
  //check users input, and five user right/wrong feedback
  checkInput(event: any){
    let user_input=event.target.value;

    if(this.ans_key.trim()===user_input.trim()){
      this.correctInput(event);
    }else{
      this.colorize(user_input);
    }
  }


  //------------------------------------------------------------
  // takes user_input and gives colorized feedback
  //------------------------------------------------------------
  colorize(user_input:any){
        this.feedback='';
        let list=[];
        let badList=[];
        let perfect =true; // not one letter is incorrect
        for(let i=0;i<user_input.length;i++){
            if(user_input[i]===this.ans_key[i] && perfect){
              list[i]=user_input[i];
            }else{
              badList[i]=user_input[i];
            }
        }

        this.feedback=list.join('');
        this.moreFeedback=badList.join('');
  }


  //------------------------------------------------------------
  //
  //------------------------------------------------------------
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

  //------------------------------------------------------------------
  //
  //-------------------------------------------------------------------
  // creates page
  // the page is a shorter list of question, that the user can
  // master before going to the next page.
  createPage(base: number=0){
    console.log(base);
    this.page=this.problem_set.slice(base,base+this.page_length);
    this.shufflePage();

  }

  //------------------------------------------------------------------
  //
  //-------------------------------------------------------------------
  playAudio(){
    let template = "../../assets/audio/NAME.wav";
    //let filepath = template=template.replace("NAME",this.ans_key);
   //let filepath = "../../assets/audio/melcher.wav"; // makes ERROR message , but might work if i plug in headphones
    let filepath = "../../assets/audio/ああ.wav"; //
    let audio = new Audio();
    audio.src = filepath;
    audio.load();
    audio.play();
    console.log(filepath);
  }



  //------------------------------------------------------------------
  //
  //-------------------------------------------------------------------
  shufflePage(){
    this.page.sort(() => Math.random() - 0.5);
  }

  //------------------------------------------------------------------
  //
  //-------------------------------------------------------------------
  shuffleAll(){
    this.problem_set.sort(() => Math.random() - 0.5);
    this.createPage(this.page_count*this.page_length);
    this.drawQuestion();
  }

  //------------------------------------------------------------------
  //
  //-------------------------------------------------------------------
  settings(event: any){

      this.auto_turn=event.target.checked;
  }

  //------------------------------------------------------------------
  //
  //-------------------------------------------------------------------
  hide_image=false;
  settingsImage(event: any){

    this.hide_image=event.target.checked;
    if(this.hide_image){
      document.getElementById('image').style.visibility='hidden';
    }else{
      document.getElementById('image').style.visibility='visible';
    }
}


  //------------------------------------------------------------------
  //
  //-------------------------------------------------------------------
  // extract all question from dictionary for easier manipulation by programmer
  getAllQuestions(){

      for(var key in this.dict) {
        this.problem_set.push(key );


      }

      //this.problem_set=this.problem_set.reverse();
      //this.problem_set=this.problem_set.sort(() => Math.random() - 0.5);
  }


  //------------------------------------------------------------------
  //
  //-------------------------------------------------------------------
  nextPage(){
    this.count=0;
    this.page_count++;
    this.createPage(this.page_count*this.page_length);
    this.drawQuestion();
  }

  //------------------------------------------------------------------
  //
  //-------------------------------------------------------------------
  prevPage(){
    this.count=0;
    this.page_count--;
    this.createPage(this.page_count*this.page_length);
    this.drawQuestion();
  }

}


