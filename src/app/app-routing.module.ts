import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"product",component:ProductPageComponent},  
  {path:"product-add",component:ProductAddComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
