import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsDTO } from '../../../../application/ports/secondary/dto/products.dto';
import {
  GETS_ONE_PRODUCTS_DTO,
  GetsOneProductsDtoPort,
} from '../../../../application/ports/secondary/dto/gets-one-products.dto-port';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-detail',
  templateUrl: './detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent {

  productDetail$: Observable<ProductsDTO> = this._getsOneProductsDto.getOne(
    this._activatedRoute.snapshot.params['productId']
  );

  constructor(
    @Inject(GETS_ONE_PRODUCTS_DTO)
    private _getsOneProductsDto: GetsOneProductsDtoPort,
    private _activatedRoute: ActivatedRoute,
  ) {}
}
