package com.ballistic.PakistanBookStore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.ballistic.PakistanBookStore")
public class PakistanBooksStoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(PakistanBooksStoreApplication.class, args);
	}
}
