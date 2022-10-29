import { NgModule } from '@angular/core';
import { HttpFormService } from './http-form.service';
import { ADDS_FORM_DTO } from '../../../../application/ports/secondary/dto/adds-form.dto-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [HttpFormService, { provide: ADDS_FORM_DTO, useExisting: HttpFormService }],
  	exports: [] })
export class HttpFormServiceModule {
}
