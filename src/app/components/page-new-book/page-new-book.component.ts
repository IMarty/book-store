import { Component, OnInit } from '@angular/core';

declare const M;

@Component({
  selector: 'app-page-new-book',
  templateUrl: './page-new-book.component.html',
  styleUrls: ['./page-new-book.component.css']
})
export class PageNewBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var elems = document.querySelectorAll('#publish_date');
    var instances = M.Datepicker.init(elems);

  }

}
