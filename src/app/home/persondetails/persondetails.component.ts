import { Component, OnInit, Input } from '@angular/core';
import { Hobby } from 'app/models/hobby.model';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.css']
})
export class PersondetailsComponent implements OnInit {
  @Input('selectedPerson') selectedPerson;
  selectedHobbies = [];
  hobbies = [];
  selectedhobby ;
  constructor() {
   }

  ngOnInit() {
this.selectedHobbies = this.selectedPerson.personHobbies;
    let hobby = [];
    hobby[0] = new Hobby();
    hobby[0].hobby = "CRicket";
    hobby[1] = new Hobby();
    hobby[1].hobby = "Football";
    hobby[2] = new Hobby();
    hobby[2].hobby = "food";
    this.hobbies = hobby
  }
  addHobby(hobby){
   this.selectedHobbies.push(this.hobbies[this.selectedhobby]);  }

   remove(hobby){
     let temp = [];
     for (let index = 0; index < this.selectedHobbies.length; index++) {
    if(index != hobby){
      temp.push(this.selectedHobbies[index]);
    }
     }
     this.selectedHobbies = temp
    
     
   }

  save(){

  }
}

