import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  private api = "http://localhost:8000/api/v1/product"
  getProducts(){
    return this.http.get(this.api,{observe:"response"})
  }
}
