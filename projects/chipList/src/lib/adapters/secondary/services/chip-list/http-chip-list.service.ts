import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetsAllChipListDtoPort } from '../../../../application/ports/secondary/dto/gets-all-chip-list.dto-port';
import { ChipListDTO } from '../../../../application/ports/secondary/dto/chip-list.dto';

@Injectable()
export class HttpChipListService implements GetsAllChipListDtoPort {
  constructor(private _client: HttpClient) {
  }

  getAll(): Observable<ChipListDTO[]> {
    return this._client.get<ChipListDTO[]>('https://fakestoreapi.com/products/categories');
  }
}
