import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { CartsComponent } from './carts/component/carts/carts.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { MainlayoutComponent } from './shared/components/mainlayout/mainlayout.component';

const routes: Routes = [
  {path:'', component: MainlayoutComponent,children:[
    {path:'',redirectTo:'/products',pathMatch:'full'},
    {path:'products',component:ProductsListComponent},
    {path:'details/:id',component:ProductsDetailsComponent},
    {path:'carts',component:CartsComponent},
  ]},
  
  {path:'**',redirectTo:'products',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
