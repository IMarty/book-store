import { Component, OnInit } from '@angular/core';
import { BookService } from "../../services/book.service";
@Component({
  selector: 'app-page-book-list',
  templateUrl: './page-book-list.component.html',
  styleUrls: ['./page-book-list.component.css']
})
export class PageBookListComponent implements OnInit {


  myArray = [];
  constructor(private bookS: BookService) { }

  ngOnInit(): void {
    this.myArray = this.bookS.getAllBooks();
  }

}
// See you at 11h10

