import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' },  
  { path: 'login', component:  LoginComponent },
  { path: 'products', component: ProductComponent },
  { path: 'addproduct', component: AddProductComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
