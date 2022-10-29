import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { RouterModule } from '@angular/router';


@NgModule({ imports: [CommonModule, ReactiveFormsModule, RouterModule],
  	declarations: [FormComponent],
  	providers: [],
  	exports: [FormComponent] })
export class FormComponentModule {
}
