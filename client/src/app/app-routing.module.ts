import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {BookComponent} from "./book/book.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'book', component: BookComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
