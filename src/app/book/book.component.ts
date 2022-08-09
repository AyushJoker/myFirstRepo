import { Component, OnInit } from '@angular/core';
import { BookData } from '../models/bookData';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 books:BookData[]=[
  {bookID:101,bookName:"The Candy House",price:1495,author:"Jennifer Egan",photo:'/assets/images/bimage1.jpg'},
  {bookID:102,bookName:"Atomic Habbits",price:485,author:"James Clare",photo:'/assets/images/bimage2.jpg'},
  {bookID:103,bookName:"Dark Psychology",price:1099,author:"Ryan Watson",photo:'/assets/images/bimage3.jpg'},
  {bookID:104,bookName:"Hidden Hindu",price:203,author:"Akshat Gupta",photo:'/assets/images/bimage4.jpg'},
  {bookID:105,bookName:"The It Girl",price:1599,author:"Ruth Ware",photo:'/assets/images/bimage5.jpg'},
 ]
  constructor() { }

  ngOnInit(): void {
  }
}
