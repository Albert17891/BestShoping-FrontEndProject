import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteProductModel } from './interfaces/ProductManagement/DeleteProductModel';
import { ProductWithOwner } from './interfaces/ProductManagement/ProductWithOwner';

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  constructor(public http:HttpClient) { }

  getProductWithOwner():Observable<ProductWithOwner[]>{
       return this.http.get<ProductWithOwner[]>("https://localhost:7246/Admin/get-product-with-owner");
  }

  DeleteProduct(id:number){
    const deleteProduct:DeleteProductModel={id:id};
     this.http.post("https://localhost:7246/Admin/delete-product",deleteProduct)
     .subscribe(response=>{
      
     })
                  
   }
}
