import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  baseUrl: string = 'https://fakestoreapi.com/';
  constructor(private http: HttpClient) { }

  createNewOrder(model:any){
    return this.http.post(this.baseUrl + 'carts', model);
  }
}
