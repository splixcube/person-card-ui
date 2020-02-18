import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Response} from '@angular/http'

@Injectable()
export class GlobalService {
   common = 'http://localhost:8085';
role ;
component :string = 'login';
key = "ISCLLGNUSR";
user;
userName :string;

constructor() { }

public setToken(userName, token){
  this.userName = userName;
  localStorage.setItem(this.key, JSON.stringify(token));           
}

public getToken(){

 return JSON.parse(localStorage.getItem(this.key));
}

public setUser(user){
localStorage.setItem(this.key+"_user", JSON.stringify(user)); 
this.user = user; 
}
public getUser(){
return JSON.parse(localStorage.getItem(this.key+"_user"));;
}

public removeSession(){
localStorage.removeItem(this.key+"_user");
sessionStorage.removeItem(this.key);
}

public handleError (error : Response | any) {
// In a real world app, you might use a remote logging infrastructure
let errMsg: string; 

if (error instanceof Response) {
var body : any  = error.json() || '';
var err  = body.error || JSON.stringify(body);
errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
} else {
errMsg = error.message ? error.message : error.toString();
}
console.error(errMsg);
return errMsg;
}

}
