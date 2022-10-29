import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipListComponent } from './chip-list.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({ imports: [CommonModule, MatChipsModule, ],
  	declarations: [ChipListComponent],
  	providers: [],
  	exports: [ChipListComponent] })
export class ChipListComponentModule {
}
