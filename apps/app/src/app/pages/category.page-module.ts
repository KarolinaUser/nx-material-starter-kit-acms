import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryPage } from './category.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: CategoryPage,
        }
      ])],
  	declarations: [CategoryPage],
  	providers: [],
  	exports: [] })
export class CategoryPageModule {
}
