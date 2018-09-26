import {Component, OnInit} from '@angular/core';
import {AuthorService, BookService, TypeService} from "../domain/service";
import {Author, Book, Type} from "../domain/mocks";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[];
  types: Type[];
  authors: Author[];

  constructor(private _bookService: BookService,
              private _typeService: TypeService,
              private _authorService: AuthorService) {
  }

  ngOnInit() {
    this._bookService.getBooks().subscribe(resp => {
      this.books= resp;
    })
  }

}
