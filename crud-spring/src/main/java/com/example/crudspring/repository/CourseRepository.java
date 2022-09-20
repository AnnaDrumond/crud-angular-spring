package com.example.crudspring.repository;

import com.example.crudspring.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositório <a href="https://www.alura.com.br/artigos/primeiros-passos-spring">...</a>
 * Quando pensamos em inserir, pesquisar, alterar dados, logo pensamos em DAOS ou até mesmo em comandos SQL,
 * isto é muito trabalhoso. Mas então como vamos fazer a persistência dos dados? Na classe de entidade?
 * Iremos fazer isto nos repositórios, pois facilita demais o processo do CRUD.
 * Por boas práticas não vamos fazer dentro da classe entidade.
 * O repositório tem uma interface chamada CrudRepository que nos permite fazer um CRUD dos nossos dados, sem que a gente escreva uma linha de código.
 */
// JpaRepository<User,Long> - entidade,chave primária
@Repository
public interface CourseRepository extends JpaRepository <Course,Long> {




}
