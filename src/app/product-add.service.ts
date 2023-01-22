import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductAddService {

  constructor(public http:HttpClient) { }

  ProductAdd(name:string,productType:string){
        const product:Product={name:name,productType:productType}
       this.http.post("",product)
            .subscribe(response=>{
                 alert(response)
            })  ;
  }
}
