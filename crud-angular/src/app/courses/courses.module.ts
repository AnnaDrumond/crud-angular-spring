import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialImportsModule } from '../shared/app-material-imports/app-material-imports.module';
import { SharedModule } from '../shared/shared.module';
import { CourseRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    AppMaterialImportsModule,
    SharedModule
  ]
})
export class CourseModule { }
