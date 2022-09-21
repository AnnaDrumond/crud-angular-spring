import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //pathMatch vai analisar o roteamento e tendo certeza de que o path não tem nada é só http://localhost:4200
  //vai redirecionar para /courses
  {path: '', pathMatch:'full', redirectTo: '/courses'},// este redirectTO vai enviar para o path a linha da rota de lazy loading
  {
    //Agora temos de configurar a rota de courses - rota de lazy loading:
    //usar o nome que quiser
    path: 'courses',
    //Ou seja, quando carregar http://localhost:4200 vai redirecionar para http://localhost:4200/courses
    // e seus subsequentes "paths" então serão exibidos tudo que estiver em coursesmodule, bem como ações e paths
    // a partir de http://localhost:4200/courses que estão definidos em courses-routing.module.ts
    //no import está o caminho para o modulo filho
    //Lazyloading - carregamento por demanda
    loadChildren: () => import('./courses/courses.module').then(module => module.CourseModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
