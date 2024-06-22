import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllProductsComponent } from './get-all-products/get-all-products.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"getallproducts",
    pathMatch:'full'
  },
  {
    path:"getallproducts",
    component:GetAllProductsComponent
  },
  {
    path:"addproduct",
    component:AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
