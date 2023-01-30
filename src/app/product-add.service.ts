import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardProduct } from './interfaces/CardProduct';
import { CardProductUpdate } from './interfaces/CardProductUpdate';
import { ProductResponse } from './interfaces/ProductResponse';
import { Product } from './Product';


@Injectable({
  providedIn: 'root'
})
export class ProductAddService  {

  constructor(public http:HttpClient) { }

  ProductAdd(name:string,type:string,quantity:number,price:number,counter:number){ 

        const product:Product={name:name,type:type,quantity:quantity,price:price}        
       this.http.post("https://localhost:7246/Product/product-add",product)
            .subscribe(response=>{
                 alert(response)
            })  ;
  }

  CardProductAdd(productId:number,name:string,type:string,quantity:number,price:number){
       
    const product:CardProduct={userId:localStorage.getItem("userId"),productId:productId,name:name,type:type,quantity:quantity,price:price}        
    this.http.post("https://localhost:7246/Card/add-card-products",product)
         .subscribe(response=>{             
         })  ;
  }

  CardProductUpdateInc(id:number,productId:number,name:string,type:string,quantity:number,price:number){
    const product:CardProductUpdate={id:id,userId:localStorage.getItem("userId"),productId:productId,name:name,type:type,quantity:quantity,price:price}        
    this.http.post("https://localhost:7246/Card/inc-update-card-products",product)
         .subscribe(response=>{             
         })  ;
  }

  CardProductUpdateDec(id:number,productId:number,name:string,type:string,quantity:number,price:number){
    const product:CardProductUpdate={id:id,userId:localStorage.getItem("userId"),productId:productId,name:name,type:type,quantity:quantity,price:price}        
    this.http.post("https://localhost:7246/Card/dec-update-card-products",product)
         .subscribe(response=>{             
         })  ;
  }

  

  getProduct():Observable<ProductResponse[]>{
    return this.http.get<ProductResponse[]>("https://localhost:7246/Product");
  }       
  
  getCardProduct():Observable<CardProductUpdate[]>{
    let params=new HttpParams();

    const userId=localStorage.getItem("userId");
    
    params=params.append("userId",userId!);

    return this.http.get<CardProductUpdate[]>("https://localhost:7246/Card/get-card-products/",{params});
  }
  
}
