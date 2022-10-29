import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ADDS_FORM_DTO, AddsFormDtoPort } from '../../../../application/ports/secondary/dto/adds-form.dto-port';

@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
    
  readonly product: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });
    

  constructor(
    @Inject(ADDS_FORM_DTO) 
    private _addsFormDto: AddsFormDtoPort,
    private router: Router,
    ) {
  }

  onProductSubmited(product: FormGroup): void {
    this._addsFormDto.add({
        title: product.get('title')?.value,
        price: product.get('price')?.value,
        description: product.get('description')?.value,

    }).subscribe();
    this.router.navigate(['products']);
    this.product.reset();
  }
}
