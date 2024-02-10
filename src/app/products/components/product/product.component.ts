import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private router:Router){

  }
@Input() data:any= {};
@Output() itemToAdd = new EventEmitter();
addButton:boolean= false;
amount:number = 0;

add(){
  if(this.amount>0){
    this.itemToAdd.emit({item:this.data,quantity:this.amount});
    console.log("successfully added");
  }else{
    alert("Enter a valid number for the quantity");
  }

}
goToProductDet(productId: number){
  this.router.navigate(['/products',productId]);
}
}
