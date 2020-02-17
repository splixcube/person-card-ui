import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from './global.service';
import { Http, Headers } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class LoginService {

  constructor(private http: Http, private globalService: GlobalService) { }

  // tslint:disable-next-line:member-ordering
  private httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
  };
  // tslint:disable-next-line:member-ordering
  private loginUrl = this.globalService.common + '/authenticate';


  login(request): Observable<any> {
    return this.http.post(this.loginUrl, request, this.httpOptions)
      .pipe(
        map(res => res),
        catchError(this.globalService.handleError)
      );
  }


}
