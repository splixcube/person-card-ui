import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Http } from '@angular/http/src/http';
import { Headers  } from '@angular/http/src/headers';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class PersonService {
   httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json', 'Authorization' : this.globalService.getToken()})
   };

  constructor(private http: Http, private globalService : GlobalService) { }

  private getAllPersonUrl = this.globalService.common + '/person/all';
  private savePersonUrl = this.globalService.common + 'person/save';
  private deleteUrl = this.globalService.common + 'person/delete';

  getAllPersons() {
 return this.http.get(this.getAllPersonUrl, this.httpOptions)
     .pipe(
        map(res => res),
        catchError(this.globalService.handleError)
    );
  }

  savePerson(person) {
    return this.http.post(this.savePersonUrl, person, this.httpOptions)
    .pipe(
       map(res => res),
       catchError(this.globalService.handleError)
   );

  }
  deletePerson() {
    return this.http.delete(this.deleteUrl , this.httpOptions)
     .pipe(
        map(res => res),
        catchError(this.globalService.handleError)
    );

  }
}
