import { Component, OnInit } from '@angular/core';
import { Person } from 'app/models/person.model';
import { Hobby } from 'app/models/hobby.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedPerson;
  name : string;
  details = false;
  persons = [];
  allpersons = [];
  constructor() { }

  ngOnInit() {
    const person = new Person();
    person.firstName = 'ANUSH';
    person.lastName = 'JAin';
    person.age = 20;
    person.favouriteColor = 'red';
    person.personHobbies = [];
    const hobby = [];
    hobby[0] = new Hobby();
    hobby[0].hobby = 'CRicket';
    person.personHobbies = hobby;
    this.persons.push(person);
    this.persons.push(person);
this.allpersons = this.persons;


  }
  search(){
  const temp = [];
  this.allpersons.forEach(e => {
    if (e.search(this.name)){
     temp.push(e);
    }
  });
  this.persons = temp;
  }
  back(){
    this.details = false;
  }
  addperson(){
    this.selectedPerson = new Person();
    this.details = true;
  }
  detailsforPeson(person) {
    {
      this.selectedPerson = person;
      this.details = true;
    }
  }
}
