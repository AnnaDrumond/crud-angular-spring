import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  //formulario que será referenciado no html
  // Como é um "grupo" de campos, será um formGroup
  form: FormGroup;

  //FormBuilder contém a lógica para criar o formulário de criação de um novo curso
  constructor(
    private formBuilder: FormBuilder,
    private coursesService: CoursesService,
    private _snackBar: MatSnackBar
  ) {
    //Será iniciado com group, pois nosso form será formado de um grupo de campos
    // Irá levar como parametro um objeto corrrespondente ao
    this.form = this.formBuilder.group({
      // _id: [null], - para aproveitar para o editar curso
      name: [null],
      category: [null],
    });
  }

  ngOnInit(): void {}

  onCancel() {}

  //ação de salvar curso - quem envia ao back é o service
  onSubmit() {
    //enviar os dados para o método que vai os enviar ao backend, e que está em service
    this.coursesService.saveCourse(this.form.value).subscribe({
      //https://rxjs.dev/deprecations/subscribe-arguments
      next: (data) => console.log(data),
      error: () => {
        this.onError();
      },
    });
  } // fim onSubmit

  private onError(): void {
    this._snackBar.open('Erro ao salvar curso!!', '', {
      duration: 3000,
    });
  }
}
