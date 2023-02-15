import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { ChangeDetectorRef, Injectable, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { delay, map, Observable, Subject, takeUntil, takeWhile } from 'rxjs';
import { CardProduct } from './interfaces/CardProduct';
import { CardProductUpdate } from './interfaces/CardProductUpdate';
import { ProductResponse } from './interfaces/ProductResponse';
import { Product } from './Product';


@Injectable({
  providedIn: 'root'
})
export class ProductAddService  {

  constructor(public http:HttpClient,public route:Router) { }

  ProductAdd(name:string,type:string,quantity:number,price:number,counter:number){ 

        var ownerUserId=localStorage.getItem("userId");

        const product:Product={ownerUserId:ownerUserId,name:name,type:type,quantity:quantity,price:price}        
       this.http.post("https://localhost:7246/Product/product-add",product)
             .pipe()
            .subscribe(response=>{
                 if(response !=null){
                  this.route.navigate(["/manager"])
                 }
            })  ;
  }

  CardProductAdd(productId:number,name:string,type:string,quantity:number,price:number){
       
    const product:CardProduct={userId:localStorage.getItem("userId"),productId:productId,name:name,type:type,quantity:quantity,price:price}        
    this.http.post("https://localhost:7246/Card/add-card-products",product)
          .pipe(delay(2000))
         .subscribe(response=>{             
         })  ;
  }

  unsubscribe:Subject<void>=new Subject<void>();

  CardProductUpdateInc(id:number,productId:number,name:string,type:string,quantity:number,price:number,sumPrice:number){
    const product:CardProductUpdate={id:id,userId:localStorage.getItem("userId"),productId:productId,name:name,
                                      type:type,quantity:quantity,price:price,sumPrice:sumPrice}        
    this.http.post("https://localhost:7246/Card/inc-update-card-products",product)
                  .pipe()
                  .subscribe(
                       
                  )                
           
  }

  CardProductDeleteWithId(id:number){
      var params=new HttpParams()
      .set("id",id);
      this.http.get("https://localhost:7246/Card/delete-card-product",{params})
                  .pipe()
                  .subscribe(                  
                  )           
  }

  CardProductUpdateDec(id:number,productId:number,name:string,type:string,quantity:number,price:number,sumPrice:number){
    const product:CardProductUpdate={id:id,userId:localStorage.getItem("userId"),productId:productId,name:name,type:type,
                                        quantity:quantity,price:price,sumPrice:sumPrice}        
    this.http.post("https://localhost:7246/Card/dec-update-card-products",product)
          .pipe(delay(2000))
         .subscribe(response=>{             
         })  ;
  }

  

  getProduct():Observable<ProductResponse[]>{
    return this.http.get<ProductResponse[]>("https://localhost:7246/Product");
  }       
  
  getCardProduct():Observable<CardProductUpdate[]>{ 
    
    return this.http.get<CardProductUpdate[]>("https://localhost:7246/Card/get-card-products/");
  }
  
}
