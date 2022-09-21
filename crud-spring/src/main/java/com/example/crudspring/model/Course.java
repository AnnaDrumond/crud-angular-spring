package com.example.crudspring.model;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter // todos terão getter
@Slf4j //fazer log da execução dos nossos serviços
@NoArgsConstructor
@RequiredArgsConstructor // Neste caso cada um dos atributos que QUERO no construtor devem ter a annotation  @NonNull
@ToString(of = {"name" , "id"})// Quero toString somente destes atributos
public class Course {
    @Id//indica que é a pk
    @GeneratedValue(strategy = GenerationType.IDENTITY)//gerar pk de forma automatica e sequencial
    //Informar o nome que este atributo terá após o marshelling para Json
    //Neste caso, coloquei o nome respetivo a este atributo na minha interface course do Angular
    @JsonProperty("_id")
    private Long id;

    @Column(length = 200, nullable = false)
    @Setter @NonNull
    private String name;

    @Column(length = 20, nullable = false)
    @Setter  @NonNull
    private String category;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Course course = (Course) o;
        return Objects.equals(id, course.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
