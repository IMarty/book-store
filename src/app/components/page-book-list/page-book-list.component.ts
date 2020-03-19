import { Component, OnInit } from '@angular/core';
import { BookService } from "../../services/book.service";
import Utils from '../../helper/utils';

@Component({
  selector: 'app-page-book-list',
  templateUrl: './page-book-list.component.html',
  styleUrls: ['./page-book-list.component.css']
})
export class PageBookListComponent implements OnInit {

  selectedFilter;
  myArray = [];
  constructor(private bookS: BookService) { }

  ngOnInit(): void {
    this.myArray = this.bookS.getAllBooks();
  }

  changeAvailability(book) {
    book.available = !book.available;
  }

  orderName() {
    this.myArray = (new Utils()).sortString(this.myArray, "name", 1);
    this.selectedFilter = 'name';
  }
  orderAuthor() {
    this.myArray = (new Utils()).sortString(this.myArray, "author", 1);
    this.selectedFilter = 'author';
  }
  orderPrice() {
    this.myArray = this.myArray.sort((a, b) => {
      // Use toUpperCase() to ignore character casing
      const numberA = a.price;
      const numberB = b.price;
      return numberA - numberB;
    });

    this.selectedFilter = 'price';
  }
}
// See you at 11h10

