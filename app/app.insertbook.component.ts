// ok test
import { Component, OnInit } from '@angular/core';
import { Book } from './app.book';
import { BookService } from './app.book.service';
@Component({
    moduleId:module.id,
    selector: 'insert-book',  
    templateUrl:'views/app.insertbook.component.html'
    
})
export class InsertBook{
  
  name:any;
  author:any;
  isbn:any;
  no_copies:any;
  price:any;
  constructor(private bookservice: BookService,
    ) {

    }
    
   onSubmit() { 
     console.log("Form submit");
     this.bookservice.addDbBook(
       new Book(null,this.name,this.author,this.isbn,this.no_copies,this.price));
   }


}