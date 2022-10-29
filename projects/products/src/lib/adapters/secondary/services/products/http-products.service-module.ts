import { NgModule } from '@angular/core';
import { HttpProductsService } from './http-products.service';
import { GETS_ALL_PRODUCTS_DTO } from '../../../../application/ports/secondary/dto/gets-all-products.dto-port';
import { GETS_ONE_PRODUCTS_DTO } from '../../../../application/ports/secondary/dto/gets-one-products.dto-port';
import { REMOVES_PRODUCTS_DTO } from '../../../../application/ports/secondary/dto/removes-products.dto-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [HttpProductsService, { provide: GETS_ALL_PRODUCTS_DTO, useExisting: HttpProductsService }, { provide: GETS_ONE_PRODUCTS_DTO, useExisting: HttpProductsService }, { provide: REMOVES_PRODUCTS_DTO, useExisting: HttpProductsService }],
  	exports: [] })
export class HttpProductsServiceModule {
}
