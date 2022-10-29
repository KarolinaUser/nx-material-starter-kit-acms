import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllProductsDtoPort } from '../../../../application/ports/secondary/dto/gets-all-products.dto-port';
import { GetsOneProductsDtoPort } from '../../../../application/ports/secondary/dto/gets-one-products.dto-port';
import { RemovesProductsDtoPort } from '../../../../application/ports/secondary/dto/removes-products.dto-port';
import { ProductsDTO } from '../../../../application/ports/secondary/dto/products.dto';

@Injectable()
export class HttpProductsService implements GetsAllProductsDtoPort, GetsOneProductsDtoPort, RemovesProductsDtoPort {
  constructor(private _client: HttpClient) {
  }

  getAll(): Observable<ProductsDTO[]> {
    return this._client.get<ProductsDTO[]>('https://fakestoreapi.com/products');
  }

  getOne(id: string): Observable<ProductsDTO> {
    return this._client.get<ProductsDTO>('https://fakestoreapi.com/products/' + id);
  }

  remove(id: string): Observable<void> {
    return this._client.delete<ProductsDTO>('https://fakestoreapi.com/products/' + id).pipe(map(() => void 0));
  }
}
