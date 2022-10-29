import { NgModule } from '@angular/core';
import { HttpChipListService } from './http-chip-list.service';
import { GETS_ALL_CHIP_LIST_DTO } from '../../../../application/ports/secondary/dto/gets-all-chip-list.dto-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [HttpChipListService, { provide: GETS_ALL_CHIP_LIST_DTO, useExisting: HttpChipListService }],
  	exports: [] })
export class HttpChipListServiceModule {
}
