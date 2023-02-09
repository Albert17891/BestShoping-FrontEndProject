import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './AuthGuard';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RegisterComponent } from './register/register.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateComponent } from './update/update.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"product",component:ProductPageComponent},  
  {path:"product-add",component:ProductAddComponent},
  {path:"register",component:RegisterComponent},
  {path:"admin",component:AdminComponent,canActivate: [AuthGuard]},
  {path:"manager",component:ManagerComponent},
  {path:"update",component:UpdateComponent},
  {path:"update-user",component:UpdateUserComponent},
  {path:"user-management",component:UserManagementComponent},
  {path:"product-management",component:ProductManagementComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
