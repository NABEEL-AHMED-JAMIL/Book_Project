// ok test
import { Component } from '@angular/core';
import { Book } from './app.book';
import { BookService } from './app.book.service';
import { Router, ActivatedRoute } from '@angular/router';
//import {BookList} from './app.booklist.component';
//private booklist:BookList
@Component({
    moduleId : module.id,
    selector: 'book-order',
    templateUrl: 'views/app.bookorder.component.html',
    //providers: [BookList],

})

export class BookOrder {
    id: any;
    book: Book;
    quantity: any;
    tempCopie:any;
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private bookService: BookService,
        
        ) {
        // getting the value of the query parameter 
        this.activatedRoute.params.subscribe(
            (param: any) => {
                {
                    this.id = param['id'];
                    this.bookService.getBookbyId(this.id).subscribe(bk => this.book = bk);
                    // set the quantity = 0;
                    this.quantity = 0;
              }
            });
    }
    
    onDone(): void{
        
        if(this.quantity == null || this.quantity == undefined || this.quantity > this.book.no_copies  ){
           console.log("Enter value is wrong...");   
        }else{
            if(this.book.no_copies == 0){
                console.log("book not Available");

            }else{
            
             console.log("This is the copie....."+this.book.no_copies);
             this.tempCopie = this.book.no_copies;
             this.tempCopie -= this.quantity;
             console.log("after the order.....\n"+this.tempCopie);
             this.book.no_copies = this.tempCopie;
             this.bookService.updateDbBook(this.book);
            }
        }
  }
  
}