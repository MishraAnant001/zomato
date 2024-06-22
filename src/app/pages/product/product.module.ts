import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { GetAllProductsComponent } from './get-all-products/get-all-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    GetAllProductsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    TableModule
  ]
})
export class ProductModule { }
