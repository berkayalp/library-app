import {Type, TYPES} from "../mocks";
import {Observable, of} from "rxjs/index";
import {Injectable} from "@angular/core";

@Injectable()
export class TypeService {
  constructor() {

  }

  getTypes(): Observable<Type[]> {
    return of(TYPES);
  }
}
