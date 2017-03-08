// ok test
import {Book} from './app.book';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';



@Injectable()
export class BookService{
  
  constructor(private http:Http){}

  // get the all book  
   private BooksUrl = 'http://localhost:8080/';  
   getDbBook (): Observable<Book[]>{
     return this.http.get(this.BooksUrl).map((response:Response) => response.json());                 
   }
   // get the one book by id.....
   getBookbyId(id:number):Observable<Book>{
     console.log("The id of select....."+id);
     let _url = `${this.BooksUrl}${id}`;
     let book:Book;
     console.log("This is getting the book");
     return this.http.get(_url).map((response:Response) => response.json());
   }
   // add the new book into the Db
  addDbBook(book : Book): any{
    console.log(book.name);
    let headers = new Headers({'Content-Type':'application/json'});
    let option = new RequestOptions({headers:headers});
    this.http.post(this.BooksUrl,book,option).subscribe(this.extractData);
    }

  // method for json response
  private extractData(response:Response){
    let body = response.json();
    console.log(body);
    return body.data || {};
 }
  // method for error handler
 private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
 // method for delete the book from the Db
  deleteDbBook(id: number): any {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers }); 
      console.log(id);
       let _url = `${this.BooksUrl}${id}`;
       this.http.delete(_url,options).subscribe(result => console.log(result));
   }

    // Update a book
    updateDbBook (book: Book): any {
      let _url = `${this.BooksUrl}${book.id}`;
      console.log(book);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      console.log(_url);
      return this.http.put(_url,book,{headers:headers}).toPromise().then(res => console.log(res));
       
    }   
  
  


}