import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormComponentModule, HttpFormServiceModule } from '@Form';
import { FormPage } from './form.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: FormPage,
        }
      ]),
  FormComponentModule,
  HttpFormServiceModule,
],
  	declarations: [FormPage],
  	providers: [],
  	exports: [] })
export class FormPageModule {
}
