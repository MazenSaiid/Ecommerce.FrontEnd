import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit{
  productId : number = 0;
  data: any= {};
  loading:boolean = false;
constructor(private activatedRoute:ActivatedRoute,private service:ProductsService,
   private location:Location,private router:Router){
   
}
  ngOnInit(): void {  
    this.activatedRoute.paramMap.subscribe((paramMap)=> {
      this.productId = Number ((paramMap.get('id')));
    });
    this.getSingleProduct();
  }
  goBack(){
    this.location.back();
  }
  getSingleProduct(){
    this.loading =true;
    this.service.getProductsById(this.productId).subscribe({
      next:(result:any) =>{
        this.data = result;
      this.loading =false;
      },error:(err:any) =>{
      alert(err.message);
      this.loading =false;
    }});
  }

}
