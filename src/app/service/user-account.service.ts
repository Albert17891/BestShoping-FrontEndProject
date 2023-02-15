import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyProductRequest } from '../interfaces/UserAccount/BuyProductRequest';
import { UserAccountResponse } from '../interfaces/UserAccount/UserAccountResponse';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  constructor(public http:HttpClient) { }

  GetUserAccount(id:string):Observable<UserAccountResponse>{
      
    var params=new HttpParams()
       .set("userId",id);

     return this.http.get<UserAccountResponse>("https://localhost:7246/User/get-user-amount",{params})
  }

   buy(purchase:BuyProductRequest){
      this.http.post("https://localhost:7246/User/buy-product",purchase)
                  .subscribe(response=>{
                    location.reload();
                  });
   }

}
