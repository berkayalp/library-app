import {Observable, of} from "rxjs/index";
import {Author, AUTHORS} from "../mocks";

export class AuthorService {
  constructor() {

  }

  getAuthors(): Observable<Author[]> {
    return of(AUTHORS);
  }
}
