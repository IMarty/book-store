import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.css']
})
export class PageDashboardComponent implements OnInit {
  unavailableBook = [];
  nbU;
  nbB;
  nbA;
  constructor(private bookS: BookService) { }

  ngOnInit(): void {
    this.unavailableBook = this.bookS.getUnavailableBooks();
    this.nbU = this.bookS.nbUnavailable();
    this.nbB = this.bookS.nbAllBooks();
    this.nbA = this.bookS.nbAvailable();
  }

}
