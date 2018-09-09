import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReCaptchaModule } from 'angular2-recaptcha';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './domain/service';
import { BookService } from './domain/service';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReCaptchaModule,
  ],
  providers: [
    UserService,
    BookService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
