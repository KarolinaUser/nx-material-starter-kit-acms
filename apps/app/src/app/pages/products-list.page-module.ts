import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpProductsServiceModule, ProductsListComponentModule } from '@products';
import { ProductsListPage } from './products-list.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ProductsListPage,
        }
      ]),
  ProductsListComponentModule,
  HttpProductsServiceModule,
],
  	declarations: [ProductsListPage],
  	providers: [],
  	exports: [] })
export class ProductsListPageModule {
}
