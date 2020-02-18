import { Component, OnInit } from '@angular/core';
import { Person } from 'app/models/person.model';
import { Hobby } from 'app/models/hobby.model';
import { PersonService } from 'app/person.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedPerson;
  name: string;
  details = false;
  persons = [];
  allpersons = [];
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getall()
  }

  getall() {
    this.personService.getAllPersons().subscribe(res => {
      let data = JSON.parse(res._body)
      this.allpersons = data.data;
      this.persons = data.data


    })
  }
  back() {
    this.details = false;
    this.getall()
  }
  addperson() {
    this.selectedPerson = new Person();
    this.details = true;
  }
  detailsforPeson(person) {
    {
      this.selectedPerson = person;
      this.details = true;
    }
  }
  delete(person) {
    this.personService.deletePerson(person).subscribe(res => {
      alert("Deleted")
      this.getall()
    })
  }
}
