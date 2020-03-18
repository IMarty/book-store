import { Injectable } from '@angular/core';
import { BooksArray } from "./fakeData";
import { Book } from '../model/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  // I almost fake the API this way...
  myBooks = BooksArray;
  constructor() { }

  getAllBooks(): Book[] {
    return this.myBooks;
  }

  getOneBookByISBN(givenISBN: number): Book {
    return this.myBooks.filter(book => book.isbn === givenISBN)[0];
  }

  // filter on all the book unavaible
  getUnavailableBooks(): Book[] {
    return this.myBooks.filter(book => !book.available);
  }

  // length of the previous array
  nbUnavailable(): number {
    return this.getUnavailableBooks().length;
  }

  // length of the previous array
  nbAllBooks(): number {
    return this.myBooks.length;
  }

  nbAvailable(): number {
    return this.myBooks.filter(book => book.available).length;
  }
  //due at 10h30
}
