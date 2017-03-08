package com.ballistic.PakistanBookStore.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Nabeel on 12/4/2016.
 */
@Entity
@Table(name = "book")
public class Book implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String author;
    private String isbn;
    private Integer no_copies;
    private Double price;

    public Book() {
    }

    public Book(Long id, String name, String author, String isbn, Integer no_copies, Double price) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.isbn = isbn;
        this.no_copies = no_copies;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public Integer getNo_copies() {
        return no_copies;
    }

    public void setNo_copies(Integer no_copies) {
        this.no_copies = no_copies;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", author='" + author + '\'' +
                ", isbn='" + isbn + '\'' +
                ", no_copies=" + no_copies +
                ", price=" + price +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Book book = (Book) o;

        if (!id.equals(book.id)) return false;
        if (!name.equals(book.name)) return false;
        if (!author.equals(book.author)) return false;
        if (!isbn.equals(book.isbn)) return false;
        if (!no_copies.equals(book.no_copies)) return false;
        return price.equals(book.price);

    }

    @Override
    public int hashCode() {
        int result = id.hashCode();
        result = 31 * result + name.hashCode();
        result = 31 * result + author.hashCode();
        result = 31 * result + isbn.hashCode();
        result = 31 * result + no_copies.hashCode();
        result = 31 * result + price.hashCode();
        return result;
    }
}
