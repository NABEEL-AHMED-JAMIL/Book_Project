package com.ballistic.PakistanBookStore.repository;

import com.ballistic.PakistanBookStore.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Nabeel on 12/4/2016.
 */
@Repository
public interface BookRepository extends JpaRepository<Book,Long> {
}
