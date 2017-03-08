// ok test
import { Component, OnInit } from '@angular/core';
import { Book } from './app.book';
import { BookService } from './app.book.service';
@Component({
    moduleId : module.id,
    selector: 'book-list',
    templateUrl: 'views/app.booklist.component.html',
})

export class BookList implements OnInit {
    books: Book[];
    selectedbook: Book;
    constructor(private bookservice: BookService,
    ) {

    }
    // getting all book-> ok
    ngOnInit(): void {
       
        this.bookservice.getDbBook().subscribe(bks =>this.books = bks);
        console.log("In-----ngOnInit");
        
    }
    // delete one book -> ok
    delete(book:Book): void {
      
      this.bookservice.deleteDbBook(book.id);
      // find the book and delte it form the this list
     this.deleteBook(book);
      
    } 

    // delete one book -> ok
  deleteBook(book:Book){
    // know find
    let index = this.books.indexOf(book);
    console.log("Sir ap ka index hia "+index);
    this.books.splice(index, 1);
  }

  
}
       