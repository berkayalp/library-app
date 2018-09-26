import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {ReCaptchaModule} from 'angular2-recaptcha';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './domain/service';
import {CommonModule} from "@angular/common";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReCaptchaModule,
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
