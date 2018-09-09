import {Component, OnInit} from '@angular/core';
import {BookService} from "../domain/service";
import {Book} from "../domain/mocks";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[];

  constructor(private _bookService: BookService) {
  }

  ngOnInit() {
    this._bookService.getBooks().subscribe(resp => {
      this.books= resp;
    })
  }

}
