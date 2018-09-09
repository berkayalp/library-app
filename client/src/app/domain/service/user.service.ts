import { Injectable } from "@angular/core";
import {User, USERS} from '../mocks/mock.user';
import { Observable, of } from "rxjs";

@Injectable()
export class UserService {
    users: User[];
    constructor() {

    }

    getUsers(): Observable<User[]> {
        return of(USERS);
    }

}