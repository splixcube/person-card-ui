import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Http } from '@angular/http/src/http';
import { Headers  } from '@angular/http/src/headers';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonService {
   httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json', 'Authorization' : this.globalService.getToken()})
   };

  constructor(private http: Http, private globalService : GlobalService) { }

  private getAllPersonUrl = this.globalService.common + '/person/findAll';
  private savePersonUrl = this.globalService.common + '/person/save';
  private deleteUrl = this.globalService.common + '/person/deleteById/';

  getAllPersons() : Observable<any>  {
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
  deletePerson(person) {
    return this.http.get(this.deleteUrl+person.id.toString(), this.httpOptions)
     .pipe(
        map(res => res),
        catchError(this.globalService.handleError)
    );

  }
}
