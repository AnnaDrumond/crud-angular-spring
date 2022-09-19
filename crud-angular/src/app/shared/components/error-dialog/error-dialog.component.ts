import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {

  //string pois neste caso é uma mensagem de erro
  //injetamos o tipo MAT_DIALOG_DATA dando a ela o nome errorText
  constructor(@Inject(MAT_DIALOG_DATA) public errorText: string) {}

  ngOnInit(): void {
  }

}
