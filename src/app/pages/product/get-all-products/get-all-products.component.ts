import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.scss']
})
export class GetAllProductsComponent implements OnInit{
  constructor(private service : ProductService){}
  ngOnInit(): void {
    this.service.getProducts().subscribe({
      next:(response:any)=>{
        // console.log(response);
        this.product=response.body.data

      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
  product!:IProduct[]


}
