package com.example.crudspring.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter @Setter
public class CourseDTO {

    @JsonProperty("_id")
    private Long id;
    private String name;
    private String category;

}
