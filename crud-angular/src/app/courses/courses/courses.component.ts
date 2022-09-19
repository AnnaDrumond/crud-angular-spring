import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  //nome do componente, é o nome que uso quando exporto o componente
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  //referencia para o css
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  //Definir o tipo que estará armazenado em "courses".
  //Quando coloco o $ ao final, demonstra que é um observable
  courses$: Observable<Course[]>;
  //Definição das colunas da tabela do AngularMaterial
  displayedColumns = ['name', 'category'];

  //Precisamos injetar a dependencia do course.service para poder chamar/usar seus métodos
  constructor(
    private coursesService: CoursesService,
    public matDialog: MatDialog) {
    //poderia ser também:
    //this.coursesServices = new CoursesService(); - neste caso eu precisaria declarar esta variavel fora do construtor
    this.courses$ = this.coursesService.getCoursesListService()
    //tratamento de erro
    .pipe(
      // este catch também espera um Observable
      catchError(error => {
        this.onError("Erro ao carregar os cursos. Tente mais tarde.");
        return of([])
      })
    );
    //Se a minha tabela estivesse sendo construida com o ngFor, ao invés do AngularMaterial ou com o pipe | async
    //this.coursesService.getCoursesListService().subscribe(courses => this.courses = courses)
  }

  onError(errorMessage: string) {
    this.matDialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  ngOnInit(): void {}

}


