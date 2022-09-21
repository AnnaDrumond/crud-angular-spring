import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialImportsModule } from '../shared/app-material-imports/app-material-imports.module';
import { SharedModule } from '../shared/shared.module';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    AppMaterialImportsModule,
    SharedModule,//importa o sharedModule e por isso etá importando tudo que está no referido modulo
    // o que inclui os imports do angularMaterial que estão em app-material-imports.module.ts;, bem como
    // o componente dialog de erro e o pipe para o icone do tipo/categoria de curso
    ReactiveFormsModule
  ]
})
export class CourseModule { }
