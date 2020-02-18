import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Http } from '@angular/http/src/http';
import { Headers } from '@angular/http/src/headers';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HobbyService {
  httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': this.globalService.getToken() })
  };
  constructor(private http: Http, private globalService: GlobalService) { }

  private getAllhobbyUrl = this.globalService.common + '/hobby/findAll';

  getAllhobbys()  : Observable<any> {
    return this.http.get(this.getAllhobbyUrl, this.httpOptions)
      .pipe(
        map(res => res),
        catchError(this.globalService.handleError)
      );
  }

}
