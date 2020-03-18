import { Component, OnInit } from '@angular/core';
// this is the city hall
import { ActivatedRoute } from '@angular/router';
import { BookService } from "../../services/book.service";
import { Book } from '../../model/book';

@Component({
  selector: 'app-page-book-details',
  templateUrl: './page-book-details.component.html',
  styleUrls: ['./page-book-details.component.css']
})
export class PageBookDetailsComponent implements OnInit {
  mySpecificProduct: Book;

  // your room contains a phone to get the city hall
  constructor(private route: ActivatedRoute, private bs: BookService) { }

  // wake up
  ngOnInit(): void {
    // i phone the city hall and wait for a response
    this.route.paramMap.subscribe((params) => {
      const capturedISBN = +params.get('isbn'); //+ force the number type
      // because filter will return an array
      this.mySpecificProduct = this.bs.getOneBookByISBN(capturedISBN);
    })

  }
}
