import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { ChipListPageModule } from "./pages/chip-list.page-module";
import { DetailPageModule } from "./pages/detail.page-module";
import { FormPageModule } from "./pages/form.page-module";
import { ProductsListPageModule } from "./pages/products-list.page-module";


const routes: Routes = [
{

  path: 'products',
  loadChildren: () => ProductsListPageModule,
},
{

  path: 'add-product',
  loadChildren: () => FormPageModule,
},
{

  path: 'chip-list',
  loadChildren: () => ChipListPageModule,
},
{

  path: 'detail',
  loadChildren: () => DetailPageModule,
},




]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
