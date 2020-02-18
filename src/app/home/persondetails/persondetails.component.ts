import { Component, OnInit, Input } from '@angular/core';
import { Hobby } from 'app/models/hobby.model';
import { HobbyService } from 'app/hobby.service';
import { PersonService } from 'app/person.service';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.css']
})
export class PersondetailsComponent implements OnInit {
  @Input('selectedPerson') selectedPerson;
  selectedHobbies = [];
  hobbies = [];
  selectedhobby;
  constructor(private hobbyService: HobbyService, private personService: PersonService) {
  }

  ngOnInit() {
    this.getAllHobbies()
  }
  addHobby(hobby) {
    this.selectedHobbies.push(this.hobbies[this.selectedhobby]);
  }

  remove(hobby) {
    let temp = [];
    for (let index = 0; index < this.selectedHobbies.length; index++) {
      if (index != hobby) {
        temp.push(this.selectedHobbies[index]);
      }
    }
    this.selectedHobbies = temp


  }

  save() {
    this.selectedPerson.hobby = []
    this.selectedHobbies.forEach(e => {

      this.selectedPerson.hobby.push(e.hobby)

    });
    console.log(this.selectedPerson)

    this.personService.savePerson(this.selectedPerson).subscribe(res => {
      alert("saved")
    })
  }
  getAllHobbies() {
    this.hobbyService.getAllhobbys().subscribe(res => {
      this.hobbies = JSON.parse(res._body)
      this.fetchHobby()
    })
  }
  fetchHobby() {

    if (this.selectedPerson.hobby) {
      this.selectedPerson.hobby.forEach(element => {
        this.hobbies.forEach(e => {
          if (e.hobby == element) {
            this.selectedHobbies.push(e)
          }
        })
      });


    } else {
      this.selectedPerson.hobby = []
    }
  }
}

