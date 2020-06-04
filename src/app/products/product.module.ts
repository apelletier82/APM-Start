import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './productList.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpaces } from '../shared/convertToSpaces.pipe';
import { ProductDetailGuard } from './product-detail.guard';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpaces
  ],
  imports: [
    RouterModule.forChild([      
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent }
    ]),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class ProductModule { }
