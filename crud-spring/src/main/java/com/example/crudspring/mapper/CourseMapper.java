package com.example.crudspring.mapper;

import com.example.crudspring.dto.CourseDTO;
import com.example.crudspring.model.Course;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component//representa um componente (bean) que é detectado automaticamente quando trabalhamos com configurações baseadas em annotations
/*Ao carregar a aplicação, o Spring escanea o classpath atrás de classes anotadas com @Component ou especializações para então criar
uma instância com escopo do tipo singleton por padrão, ou seja, os beans são stateless (não devem guardar estado),
assim não sendo necessário uma nova instância do bean a cada vez que houver uma referência.
https://www.baeldung.com/mapstruct*/
@AllArgsConstructor
public class CourseMapper {

    private ModelMapper modelMapper;

    //https://www.youtube.com/watch?v=DmKx0uNpB_M

    //TODO mudar para mapstruct

    public Course toModel(CourseDTO courseDTO) {
       // Course course = Course.builder().name(courseRequestDTO.name()).category(courseRequestDTO.category()).build();
        Course course = modelMapper.map(courseDTO, Course.class);
        return course;
    }

    public CourseDTO toDTO(Course course) {
        if (course == null) {
            return null;
        }
        CourseDTO courseDTO = modelMapper.map(course, CourseDTO.class);
        return courseDTO;
    }
}
