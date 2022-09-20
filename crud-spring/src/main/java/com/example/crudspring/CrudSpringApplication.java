package com.example.crudspring;

import com.example.crudspring.model.Course;
import com.example.crudspring.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

    public static void main(String[] args) {

        SpringApplication.run(CrudSpringApplication.class, args);
    }

    @Bean
    //CommandLineRunner é executado logo assim que app começa a correr
    CommandLineRunner initFakeDataBase(CourseRepository courseRepository){
        return args -> {
            courseRepository.deleteAll();
            Course course = new Course();
            course.setName("Angular com Spring");
            course.setCategory("front-end");
            courseRepository.save(course);
        };
    }

}
