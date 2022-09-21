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
        // Isso é apenas para colocar dados hardcoded no banco H2 para testes
            courseRepository.deleteAll();

            Course course = new Course();
            course.setName("Angular com Spring");
            course.setCategory("front-end");
            courseRepository.save(course);

            Course course2 = new Course();
            course2.setName("Angular com Spring 2");
            course2.setCategory("back-end");
            courseRepository.save(course2);

        };
    }

}
