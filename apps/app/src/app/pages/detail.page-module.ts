import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailComponentModule, HttpProductsServiceModule } from '@products';
import { DetailPage } from './detail.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: ':productId',
          component: DetailPage,
        }
      ]),
  DetailComponentModule,
  HttpProductsServiceModule,
],
  	declarations: [DetailPage],
  	providers: [],
  	exports: [] })
export class DetailPageModule {
}
