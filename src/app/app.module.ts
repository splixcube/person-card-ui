import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PersondetailsComponent } from './home/persondetails/persondetails.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login.service';
import { GlobalService } from './global.service';
import { PersonService } from './person.service';
import { HobbyService } from './hobby.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PersondetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [LoginService , GlobalService ,PersonService , HobbyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
