import { Component, OnInit } from '@angular/core';
import { BooksArray } from "../../services/fakeData";
@Component({
  selector: 'app-page-book-list',
  templateUrl: './page-book-list.component.html',
  styleUrls: ['./page-book-list.component.css']
})
export class PageBookListComponent implements OnInit {

  // 20min  Break -> 15h40
  myArray = BooksArray;
  constructor() { }

  ngOnInit(): void {
  }

}

