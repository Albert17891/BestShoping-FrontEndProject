import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Product';


@Injectable({
  providedIn: 'root'
})
export class ProductAddService  {

  constructor(public http:HttpClient) { }

  ProductAdd(name:string,type:string,quantity:number,price:number){ 

        const product:Product={name:name,type:type,quantity:quantity,price:price}        
       this.http.post("https://localhost:7231/Product/product-add",product)
            .subscribe(response=>{
                 alert(response)
            })  ;
  }

  

  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>("https://localhost:7231/Product");
  }            
  
}
