package com.ballistic.PakistanBookStore.controller;

import com.ballistic.PakistanBookStore.entity.Book;
import com.ballistic.PakistanBookStore.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * Created by Nabeel on 12/4/2016.
 */
@RestController
public class BookController {



    @Autowired
    private BookRepository bookRepository;

    // get the All the Book
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Book>> findAllBooks() {
        System.out.println("Calling rest");
        List<Book> book_list = bookRepository.findAll();
        if(book_list.isEmpty()){
            return new ResponseEntity<List<Book>>(book_list,HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Book>>(book_list,HttpStatus.OK);
    }

    // post the new book
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Book> Addbook(@RequestBody Book book) {

        this.bookRepository.save(book);
        return new ResponseEntity<Book>(book,HttpStatus.CREATED);
    }
    //  delete thec book
    @RequestMapping(value = "{id}",method = RequestMethod.DELETE)
    public ResponseEntity<Book> Deletebook(@PathVariable("id") Long id) {

        this.bookRepository.delete(id);
        return new ResponseEntity<Book>(HttpStatus.NO_CONTENT);
    }

    // get book by id
    @RequestMapping(value = "{id}",method = RequestMethod.GET)
    public ResponseEntity<Book> getbook(@PathVariable("id") Long id) {

        Book book = this.bookRepository.findOne(id);
        return new ResponseEntity<Book>(book,HttpStatus.OK);
    }
    // update the book
    @RequestMapping(value = "{id}",method = RequestMethod.PUT)
    public ResponseEntity<Book> Updatebook(@RequestBody Book book) {
         System.out.println("<---------------------------------------------->");
        System.out.println("<---------------------------------------------->");
        System.out.println("<---------------------------------------------->");
        System.out.println("<---------------------------------------------->");
        this.bookRepository.save(book);
        System.out.println("<---------------------------------------------->");
        System.out.println("<---------------------------------------------->");
        System.out.println("<---------------------------------------------->");
        System.out.println("<---------------------------------------------->");


        return new ResponseEntity<Book>(book,HttpStatus.OK);
    }






}
