import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductResponse } from './interfaces/ProductResponse';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(public http:HttpClient,public router:Router) { }


  product!:ProductResponse;

  iniProduct(product:ProductResponse){
      this.product=product;     
  }



  updateProduct(id:number,name:string,type:string,quantity:number,price:number){
    var ownerUserId=localStorage.getItem("userId");
     const product:ProductResponse={id:id,ownerUserId:ownerUserId,name:name,type:type,quantity:quantity,price:price}  
     
      this.http.post("https://localhost:7246/Product/product-update",product)
                 .subscribe(response=>{

                 })

                 this.router.navigate(["/manager"]);
  }

  deleteProduct(product:ProductResponse){    
    this.http.post("https://localhost:7246/Product/product-delete",product)
              .subscribe(response=>{

              })
  }


   getMyProduct():Observable<ProductResponse[]>{
    return this.http.get<ProductResponse[]>("https://localhost:7246/Product/get-my-product");
   }



}
