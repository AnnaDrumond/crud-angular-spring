import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
   //path '' é a página inicial deste módulo, a configuração do /courses está no ficheiro global de rotas que
   // é o app-routing
   //Quando temos http://localhost:4200/courses renderizamos o component courses
   {path: '', component: CoursesComponent},
   {path: 'new', component: CourseFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
