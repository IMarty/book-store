import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageDashboardComponent } from './components/page-dashboard/page-dashboard.component';
import { PageBookListComponent } from './components/page-book-list/page-book-list.component';
import { PageBookDetailsComponent } from './components/page-book-details/page-book-details.component';
import { PageNewBookComponent } from './components/page-new-book/page-new-book.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: PageDashboardComponent
  },
  {
    path: 'book-list',
    component: PageBookListComponent
  },
  {
    path: 'book-details/:isbn',
    component: PageBookDetailsComponent
  },
  {
    path: 'add',
    component: PageNewBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
