import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscountRequest } from 'src/app/interfaces/Discount/DiscountRequest';
import { DiscountResponse } from 'src/app/interfaces/Discount/DiscountResponse';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(public http:HttpClient) { }

  discount!:DiscountRequest

  createDiscount(discount:DiscountRequest){
     this.http.post("https://localhost:7246/Discount/create-discount",discount)
              .subscribe();
  }

  getDiscounts():Observable<DiscountResponse[]>{
    return this.http.get<DiscountResponse[]>("https://localhost:7246/Discount/get-discounts");                     
  }

  deleteDiscount(id:number){
    var params=new HttpParams()
      .set("id",id)
      this.http.get("https://localhost:7246/Discount/delete-discount",{params})
                                             .subscribe();
  }
}
