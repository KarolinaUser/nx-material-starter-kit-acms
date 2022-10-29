import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, RouterModule],
  	declarations: [ProductsListComponent],
  	providers: [],
  	exports: [ProductsListComponent] })
export class ProductsListComponentModule {
}
