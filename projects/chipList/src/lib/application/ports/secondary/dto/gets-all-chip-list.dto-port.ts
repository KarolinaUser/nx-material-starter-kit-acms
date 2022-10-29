import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ChipListDTO } from './chip-list.dto';

export const GETS_ALL_CHIP_LIST_DTO = new InjectionToken<GetsAllChipListDtoPort>('GETS_ALL_CHIP_LIST_DTO');

export interface GetsAllChipListDtoPort {
  getAll(): Observable<ChipListDTO[]>;
}
