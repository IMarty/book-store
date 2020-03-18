import { Injectable } from '@angular/core';
import { BooksArray } from "./fakeData";
@Injectable({
  providedIn: 'root'
})
export class BookService {
  // I almost fake the API this way...
  myBooks = BooksArray;
  constructor() { }

  getAllBooks() {
    return this.myBooks;
  }

  getOneBookByISBN(givenISBN) {
    return this.myBooks.filter(book => book.isbn === givenISBN)[0];
  }

  // filter on all the book unavaible
  getUnavailableBooks() {
    return this.myBooks.filter(book => !book.available);
  }

  // length of the previous array
  nbUnavailable() {
    return this.getUnavailableBooks().length;
  }

  // length of the previous array
  nbAllBooks() {
    return this.myBooks.length;
  }
  //due at 10h30
}
