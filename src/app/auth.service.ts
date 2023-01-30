import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthLogin } from './authLogin';
import { Register } from './interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient,public router:Router) { }

  LoginUser(username:string,password:string){
    const loginData:AuthLogin={username:username,password:password}    
      this.http.post("https://localhost:7246/Account/login",loginData)
      .subscribe(response=>{
       if(response!=null){        
          localStorage.setItem('token',response.toString());
           this.router.navigate(["product"]);
       }
       else{
        alert("Failed to Login");
       }
      });
  }

  RegisterUser(username:string,firstname:string,lastname:string,email:string,password:string){
    const registerData:Register={username:username,firstname:firstname,lastname:lastname,email:email,password:password}

    this.http.post("https://localhost:7246/Account/register",registerData)
              .subscribe(response=>{
                if(response!=null){
                this.router.navigate(["login"]);
                localStorage.setItem("userId",response.toString());
                }
                else{
                  alert("Failed to register")
                }
              })  
  }
}
