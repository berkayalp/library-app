import { Injectable } from "@angular/core";
import {Book, BOOKS} from '../mocks/mock.book';
import { Observable, of } from "rxjs";

@Injectable()
export class BookService {
    book: Book[];
    constructor() {

    }

    getBooks(): Observable<Book[]> {
        return of(BOOKS);
    }

}