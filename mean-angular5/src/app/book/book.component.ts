import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;

  constructor(private http: HttpClient) { 
    console.log("in book ctor")
  }

  ngOnInit() {
    console.log("on book ng on init");
    this.http.get('/book').subscribe(data => {
      console.log("on book data assign");
      this.books = data;
    });
  }
}
