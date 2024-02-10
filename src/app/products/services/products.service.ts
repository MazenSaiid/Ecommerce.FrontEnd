import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
baseUrl: string = 'https://fakestoreapi.com/';
  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get(this.baseUrl+'products');
  }
  getAllCategories(){
    return this.http.get(this.baseUrl+'products/categories');
  }
  getProductsByCategory(value:string){
    return this.http.get(this.baseUrl+'products/category/'+value);
  }
  getProductsById(value:number){
    return this.http.get(this.baseUrl+'products/'+value);
  }
}
