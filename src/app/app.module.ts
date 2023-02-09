import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS ,HttpParams} from '@angular/common/http';
import { AuthIntercepter } from './auth-intercepter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import * as jwt_decode from 'jwt-decode';
import { ManagerComponent } from './manager/manager.component';
import { UpdateComponent } from './update/update.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductPageComponent,
    ProductAddComponent,
    RegisterComponent,
    AdminComponent,
    ManagerComponent,
    UpdateComponent,
    UpdateUserComponent,
    UserManagementComponent,
    ProductManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    PaginatorModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:AuthIntercepter,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
