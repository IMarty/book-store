import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

declare const M;

@Component({
  selector: 'app-page-new-book',
  templateUrl: './page-new-book.component.html',
  styleUrls: ['./page-new-book.component.css']
})
export class PageNewBookComponent implements OnInit {
  currentBook: Book;
  constructor(private bs: BookService) {
    this.currentBook = {
      name: null,
      author: null,
      category: null,
      publishedDate: null,
      ageLimite: null,
      price: null,
      isbn: null,
      cover: null,
      available: true
    };
  }

  ngOnInit(): void {
    var elems = document.querySelectorAll('#publish_date');
    var instances = M.Datepicker.init(elems);
  }
  addBookCliked() {
    console.log(this.currentBook);
    this.bs.addNewBook(this.currentBook);
  }
}
