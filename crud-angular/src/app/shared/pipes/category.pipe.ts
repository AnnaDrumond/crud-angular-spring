import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryPipe'
})

/*Este pipe servirá para que, de acordo com o tipo de categoria carregada, seja
, exibido um determinado icone*/
export class CategoryPipe implements PipeTransform {

  //recebo uma string (categoria) e vou retornar também uma string
  transform(value: string, ...args: unknown[]): string {
    //
    switch (value.toLowerCase()) {
      // o Angular MAterial troca o valor de acordo com o nome do icone
      case 'front-end' : return 'code';
      case 'back-end' : return 'computer';
    }
    return 'code';
  } // fim transform

}//fim classe
