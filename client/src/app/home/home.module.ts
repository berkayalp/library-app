import {NgModule} from '@angular/core';
import {BookComponent} from "../book/book.component";
import {HomeRoutingModule} from "./home-routing.module";
import {AuthorService, BookService, TypeService} from "../domain/service";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    HomeComponent,
    BookComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  providers: [
    BookService,
    TypeService,
    AuthorService
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
