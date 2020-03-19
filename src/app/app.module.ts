import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageDashboardComponent } from './components/page-dashboard/page-dashboard.component';
import { PageBookListComponent } from './components/page-book-list/page-book-list.component';
import { PageBookDetailsComponent } from './components/page-book-details/page-book-details.component';
import { KpiCardComponent } from './components/kpi-card/kpi-card.component';

import { FormsModule } from "@angular/forms";
import { PageNewBookComponent } from './components/page-new-book/page-new-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageDashboardComponent,
    PageBookListComponent,
    PageBookDetailsComponent,
    KpiCardComponent,
    PageNewBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Contains the [(ngModel)], two way data binding (Script <-> HTML)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
