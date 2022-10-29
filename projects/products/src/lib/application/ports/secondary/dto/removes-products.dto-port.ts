import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const REMOVES_PRODUCTS_DTO = new InjectionToken<RemovesProductsDtoPort>('REMOVES_PRODUCTS_DTO');

export interface RemovesProductsDtoPort {
  remove(id: string): Observable<void>;
}
