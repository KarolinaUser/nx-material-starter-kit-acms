import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChipListComponentModule, HttpChipListServiceModule } from '@chipList';
import { ChipListPage } from './chip-list.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ChipListPage,
        }
      ]),
  ChipListComponentModule,
  HttpChipListServiceModule
],
  	declarations: [ChipListPage],
  	providers: [],
  	exports: [] })
export class ChipListPageModule {
}
