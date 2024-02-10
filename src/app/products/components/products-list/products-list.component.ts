import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  loading: boolean = false;
  cartProduct:any[] = [];
  constructor(private router: Router, private service: ProductsService) {}
  ngOnInit(): void {
    this.getProductsList();
    this.getCategoriesList();
  }
  getProductsList() {
    this.loading = true;
    this.service.getAllProducts().subscribe({
      next: (result: any) => {
        this.products = result;
        this.loading = false;
      },
      error: (err: any) => {
        this.loading = false;
        alert(err.message);
      },
    });
  }

  getCategoriesList() {
    this.loading = true;
    this.service.getAllCategories().subscribe({
      next: (result: any) => {
        this.categories = result;
        this.loading = false;
      },
      error: (err: any) => {
        this.loading = false;
        alert(err.message);
      },
    });
  }
  filterByCategory(event: any) {
    let value = event.target.value;
    value == 'All' ? this.getProductsList() : this.getProductsCategory(value);
  }
  getProductsCategory(keyword: string) {
    this.loading = true;
    this.service.getProductsByCategory(keyword).subscribe({
      next: (result: any) => {
        this.products = result;
        this.loading = false;
      },
      error: (err: any) => {
        alert(err.message);
      },
    });
  }

  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem('cart')!);
      console.log(this.cartProduct);
      let existeditem = this.cartProduct.find(item => item.item.id == event.item.id);
      console.log(existeditem);
      if (existeditem) {
        alert('Product already exists in your cart');
      } else {
        this.cartProduct.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProduct));
     }
    } else {
      this.cartProduct.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProduct));
      console.log(event);
    }
  }
}
