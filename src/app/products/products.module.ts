import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsDetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,FormsModule,HttpClientModule,SharedModule,RouterModule
  ],
  exports:[
    ProductsListComponent,ProductsDetailsComponent,ProductComponent
  ]
})
export class ProductsModule { }
