import { Component } from '@angular/core';
import { UserService } from './domain/service';
import { User } from './domain/mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[]= [];
  constructor(private userS: UserService) {

  }

  ngOnInit() {
    this.getUsers();
    console.log(this.users);
  }

  getUsers(): void {
    this.userS.getUsers()
    .subscribe(users => this.users = users);
  }
  title = 'client';
}
