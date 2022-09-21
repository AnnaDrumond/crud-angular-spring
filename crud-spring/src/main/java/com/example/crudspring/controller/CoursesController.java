package com.example.crudspring.controller;

import com.example.crudspring.model.Course;
import com.example.crudspring.repository.CourseRepository;
import com.example.crudspring.service.CourseService;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
//#http://localhost:8080/h2-console/
import java.util.List;

@RestController
//https://www.baeldung.com/spring-controller-vs-restcontroller
//@RestController que combina o comportamento do @Controller e do @ResponseBody.
//è a meu controlador - REST
@AllArgsConstructor // todos os atributos terão uma instancia criada quando a classe for iniciada
//è o mais usado atualmente, porque no caso é obrigatório ter instancias para os métodos funcionarem, ou seja, são obrigatórios
@RequestMapping("/api/courses")
public class CoursesController {

    // @Autowired // injetar a dependencia
    //Não usei @Autowired porque neste caso, não preciso da instância em nenhum outro momento
    //è final para garantir que não será modificado a instância - boa prática
    private final CourseRepository courseRepository;
    private final CourseService courseService;

    @CrossOrigin
    @GetMapping("/list")
    // OU ->  @RequestMapping(method = RequestMethod.GET)
    public List<Course> getCoursesList(){
        return courseRepository.findAll();
    }

    @PostMapping("/create")
    @ResponseStatus(code = HttpStatus.CREATED)
    public ResponseEntity<Course> createCourse(@RequestBody Course newCourse){
        System.out.println(newCourse.getName());
        courseRepository.save(newCourse);
        //retornar 201 se correu tudo bem
        return courseService.create(newCourse);
    }
}
