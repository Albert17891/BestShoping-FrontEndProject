import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './AuthGuard';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"product",component:ProductPageComponent},  
  {path:"product-add",component:ProductAddComponent},
  {path:"register",component:RegisterComponent},
  {path:"admin",component:AdminComponent,canActivate: [AuthGuard]},
  {path:"manager",component:ManagerComponent},
  {path:"update",component:UpdateComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
