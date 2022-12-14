import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';
// este abaixo também é para usarmos requisições http
//https://dev.to/felipedsc/observables-como-funcionam-15eb
//https://stackblitz.com/edit/fdsc-angular-observables?file=src%2Fapp%2Fapp.component.ts
//https://tableless.com.br/entendendo-rxjs-observable-com-angular/
import { first, Observable, tap } from 'rxjs';
/*o novo Angular foi construído pensando em aplicações reativas,
abandonando o uso de Promises e adotando por padrão o Observable.
Um dos operadores mais importantes do Observable é o subscribe,
que é o equivalente ao then de uma promise ou ao $watch.*/
//para mais:https://github.com/AnnaDrumond/curso-angular-basico/blob/master/src/app/services/list.service.ts

//Vai fazer parte da injeção de independencia
@Injectable({
  // a instancia desta classe será fornecida na raiz do projeto (escopo global)
  providedIn: 'root',
})
export class CoursesService {
  //o readonly impede modificações
  //Não preciso informar o localhost:8080/ pois tenho isso no ficheiro  proxy.configure.js
  private readonly API = 'api/courses/';

  // injetar dependencia do httpClient
  //Preciso de uma instancia de httpClient
  constructor(private httpClient: HttpClient) {}

  //declarar o método que vai retornar a lista de cursos do tipo Course (interface) para o componente
  // para podermos refatorar esta lista
  getCoursesListService(): Observable<Course[]> {
    //chamada AJAX/chamada assincrona com o backend/servidor
    //O pipe(cano) - a ideia é que antes de retornar a informação final, eu posso manipular esta informação
    //usando programação reativa, onde faço uso de operadores RXJS (ex: tap, take, first) para manipular estes dados
    return this.httpClient.get<Course[]>(this.API + 'list').pipe(
      //Não preciso/quero manter a conexão então posso usar este first ou take(1)- assim qe eu tiver a resposta finalizo a conexão
      first(),
      //por agora no exemplo estou apenas imprimindo para ver se veio tudo certinho
      tap((courses) => console.log(courses))
    );
  }

  //enviar ao backend o curso para salva na bd
  // no caso recebe como parametro uma interface course
  saveCourse(course: Course): Observable<Course> {
    console.log('saveCourse', course);
    //parametros (path, body)
    return (
      this.httpClient
        .post<Course>(this.API + 'create', course)
        //Não preciso/quero manter a conexão então posso usar este first ou take(1)- assim qe eu tiver a resposta finalizo a conexão
        .pipe(first())
      /**O first( ) é um método do rxjs e serve pra você pegar apenas o primeiro retorno que vai vir do back end.
       * No caso de vc receber um streaming de dados, ele pegaria só o primeiro.
       * Aqui não faz diferença alguma, mas ele está sendo usado porque ele fecha a conexão depois de receber
       * os dados. Então ele está servindo pra isso: fechar a conexão. */
    );
  }
}
