import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

declare const M;

@Component({
  selector: 'app-page-new-book',
  templateUrl: './page-new-book.component.html',
  styleUrls: ['./page-new-book.component.css']
})
export class PageNewBookComponent implements OnInit {
  currentBook = <Book>{}; // initialize the main object ! (thanks Andrès !)
  constructor(private bs: BookService,
    private router: Router) {

  }

  ngOnInit(): void {
    var elems = document.querySelectorAll('#publish_date');
    var instances = M.Datepicker.init(elems);
  }
  addBookCliked() {
    console.log(this.currentBook);
    this.bs.addNewBook(this.currentBook);
    this.router.navigate(['/book-details', this.currentBook.isbn]);
  }
}

// start thinking about a personnal project were you handle a list of stuff