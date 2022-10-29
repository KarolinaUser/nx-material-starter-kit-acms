import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsFormDtoPort } from '../../../../application/ports/secondary/dto/adds-form.dto-port';
import { FormDTO } from '../../../../application/ports/secondary/dto/form.dto';

@Injectable()
export class HttpFormService implements AddsFormDtoPort {
  constructor(private _client: HttpClient) {
  }

  add(formDTO: Partial<FormDTO>): Observable<void> {
    return this._client.post<FormDTO>('https://fakestoreapi.com/products', formDTO).pipe(map(() => void 0));
  }
}
