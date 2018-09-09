import { Component, OnInit, ViewChild } from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  rememberMe: boolean = false;

  @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log(this.email + ' ' + this.password + ' ' + this.rememberMe);
  }

  handleCorrectCaptcha(res) {
    let token= this.captcha.getResponse();
    console.log(token);
  }

}
