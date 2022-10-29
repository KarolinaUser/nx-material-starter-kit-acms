import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ChipListDTO } from '../../../../application/ports/secondary/dto/chip-list.dto';
import { GETS_ALL_CHIP_LIST_DTO, GetsAllChipListDtoPort } from '../../../../application/ports/secondary/dto/gets-all-chip-list.dto-port';

@Component({ selector: 'lib-chip-list', templateUrl: './chip-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ChipListComponent {

  chipList$: Observable<ChipListDTO[]> = this._getsAllChipListDto.getAll();

  constructor(
    @Inject(GETS_ALL_CHIP_LIST_DTO) 
    private _getsAllChipListDto: GetsAllChipListDtoPort) {
  }
}
