import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from 'app/models/authentication-request.modeul';
import { LoginService } from 'app/login.service';
import { GlobalService } from 'app/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authentication: AuthenticationRequest;
  constructor(private auth: LoginService, private globalService: GlobalService, private route: Router) { }

  ngOnInit() {
    this.authentication = new AuthenticationRequest();
  }
  login() {
    this.auth.login(this.authentication).subscribe(res => {
      let data = JSON.parse(res._body)

      if (data.code == 200) {
        this.globalService.setToken(this.authentication.userName, data.description);
        this.route.navigateByUrl('/home');

      }
    }, (err) => {

      alert("Username or password is invalid, Please enter valid credential.");

    })
  }


}

