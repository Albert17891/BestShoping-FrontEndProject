import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthLogin } from './authLogin';
import { LoginResponse } from './interfaces/LoginResponse';
import { Register } from './interfaces/register';
import jwt_decode from 'jwt-decode';
import { TokenInfo } from './interfaces/TokenInfo';

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
            const loginResponse:LoginResponse=<LoginResponse>response;
            
            localStorage.setItem("token",loginResponse.token)           
            localStorage.setItem("userId",loginResponse.userId)        
            
            const decodedToken = jwt_decode(loginResponse.token);
             const tokenInf:TokenInfo=<TokenInfo>decodedToken;

             localStorage.setItem("role",tokenInf.role)           
            
            if(tokenInf.role=='Admin'){
              this.router.navigate(["admin"])
            }else if(tokenInf.role=='Manager')
            {
              this.router.navigate(['manager'])
            }else{
                         this.router.navigate(["product"]);
            }
          
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
                }
                else{
                  alert("Failed to register")
                }
              })  
  }

   LogOut(){
    
    this.http.get("https://localhost:7246/Account/logout")
              .subscribe(response=>{
                this.router.navigate(["/login"]);
              });
              
   }

   isLoggedIn():boolean{

    var role=localStorage.getItem("role");
    if(role=='admin')
    return true;
    else
    return false;

   }

}
