import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';


@Injectable({
  providedIn: 'root'
})
export class ProductAddService {

  constructor(public http:HttpClient) { }

  ProductAdd(name:string,type:string){

    let token=localStorage.getItem('token');

    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      })
    };


        const product:Product={name:name,type:type}        
       this.http.post("https://localhost:7231/Product/product-add",product,httpOptions)
            .subscribe(response=>{
                 alert(response)
            })  ;
  }
}
