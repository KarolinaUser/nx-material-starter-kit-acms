import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsDTO } from './products.dto';

export const GETS_ONE_PRODUCTS_DTO = new InjectionToken<GetsOneProductsDtoPort>('GETS_ONE_PRODUCTS_DTO');

export interface GetsOneProductsDtoPort {
  getOne(id: string): Observable<ProductsDTO>;
}
