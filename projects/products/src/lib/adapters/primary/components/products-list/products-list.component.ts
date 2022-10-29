import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsDTO } from '../../../../application/ports/secondary/dto/products.dto';
import { GETS_ALL_PRODUCTS_DTO, GetsAllProductsDtoPort } from '../../../../application/ports/secondary/dto/gets-all-products.dto-port';
import { REMOVES_PRODUCTS_DTO, RemovesProductsDtoPort } from '../../../../application/ports/secondary/dto/removes-products.dto-port';

@Component({
  selector: 'lib-products-list',
  templateUrl: './products-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
  products$: Observable<ProductsDTO[]> = this._getsAllProductsDto.getAll();

  constructor(
    @Inject(GETS_ALL_PRODUCTS_DTO)
    private _getsAllProductsDto: GetsAllProductsDtoPort, @Inject(REMOVES_PRODUCTS_DTO) private _removesProductsDto: RemovesProductsDtoPort
  ) {}

  onProductDeleteed(id: string): void {
    this._removesProductsDto.remove(id).subscribe();
  }
}
