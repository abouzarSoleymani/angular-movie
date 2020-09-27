import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



const modules = [
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: [
    ...modules,
  ],

  entryComponents:[]
})
export class SharedModule { }
