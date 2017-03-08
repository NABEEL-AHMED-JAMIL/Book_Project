// ok test
import { Component , OnInit} from '@angular/core';
import { Book } from './app.book';
import { BookService } from './app.book.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
   moduleId: module.id,
    selector:'update-book',
    templateUrl: 'views/app.updatebook.component.html',
})
export class UpdateBook implements OnInit {
    id:any;
    book:Book;
   constructor(
        private activatedRoute: ActivatedRoute,
        private bookService: BookService) {
     
    }


     ngOnInit(): void {
   // getting the value of the query parameter 
         this.activatedRoute.params.subscribe(
            (param: any) => {
                {
                    this.id = param['id'];
                    this.bookService.getBookbyId(this.id).subscribe(bk => this.book = bk);
                    //console.log(this.book);
                    console.log(this.book); 
              }
            });
      
    }

  onSubmit():void{
    
    console.log(this.book);
    this.bookService.updateDbBook(this.book);
  }


 
}