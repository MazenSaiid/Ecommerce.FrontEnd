import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent implements OnInit{

  constructor(private cartService:CartsService){

  }
  ngOnInit(): void {
    this.getCartProducts();
  }
  success:boolean = false;
  cartProduct:any[]=[];
  total: number =0;
  getCartProducts(){
    if('cart' in localStorage){
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!);
    }
    this.getCartTotal();
  }
  getCartTotal(){
    this.total =0;
    for(let index in this.cartProduct){
      this.total+= this.cartProduct[index].item.price * this.cartProduct[index].quantity;
    }
  }
  increaseAmount(index:number){
    this.cartProduct[index].quantity++;
    this.getCartTotal();
    localStorage.setItem('cart',JSON.stringify(this.cartProduct));

    }
  decreaseAmount(index:number){
    this.cartProduct[index].quantity--;
    this.getCartTotal();
    localStorage.setItem('cart',JSON.stringify(this.cartProduct));
  }
  detectAmount(){
    this.getCartTotal();
    localStorage.setItem('cart',JSON.stringify(this.cartProduct));
  }
  deleteProduct(index:number){
    this.cartProduct.splice(index,1);
    this.getCartTotal();
    localStorage.setItem('cart',JSON.stringify(this.cartProduct));
  }
  clearCart(){
    this.cartProduct = [];
    this.getCartTotal();
    localStorage.setItem('cart',JSON.stringify(this.cartProduct));
  }
  orderProducts(){
    let productsDto = this.cartProduct.map(item => {
      return {productId:item.item.id,quantity:item.quantity}
    })

    let Model = {
      userId : 5,
      date : new Date(),
      products: productsDto
    }

    this.cartService.createNewOrder(Model).subscribe({
      next:(result:any) =>{
        this.success = true;
      },
      error: (err:any) =>{
        alert(err.message)
      }
    })
  }
}
