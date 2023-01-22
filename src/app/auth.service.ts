import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthLogin } from './authLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient,public router:Router) { }

  LoginUser(username:string,password:string){
    const loginData:AuthLogin={username:username,password:password}
      this.http.post("https://localhost:7231/Account/login",loginData)
      .subscribe(response=>{
       if(response!=null){
           this.router.navigate(["product"]);
       }
       else{
        alert("Failed to Login");
       }
      });
  }
}
