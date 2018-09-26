import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from "../book/book.component";
import {HomeComponent} from "./home.component";
import {Book} from "../domain/mocks";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'book',
        component: BookComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
