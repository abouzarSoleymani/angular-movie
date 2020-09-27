import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';



const modules = [
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: [
    ...modules,
    SearchComponent
  ],

  entryComponents: []
})
export class SharedModule { }
