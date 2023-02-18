import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TopProduct } from './interfaces/ProductReport/TopProduct';
import { TopTenSeller } from './interfaces/ProductReport/TopTenSeller';
import { TopUsers } from './interfaces/ProductReport/TopUser';
import { Transation } from './interfaces/ProductReport/Transaction';

@Injectable({
  providedIn: 'root'
})
export class ProductReportService {

  constructor(public http:HttpClient,public route:Router) { }

  topTenProduct!:TopProduct[];
  topTenUsers!:TopUsers[];
  topTenSellers!:TopTenSeller[];
  transactions!:Transation[];

   topTen(){
         this.http.get<TopProduct[]>("https://localhost:7246/Report/get-top-ten")
                    .subscribe(data=>{
                       this.topTenProduct=data;
                       this.route.navigate(["top-product"])
                    });
   }

   GetTopTenUsers(){
      this.http.get<TopUsers[]>("https://localhost:7246/Report/get-top-ten-user")
               .subscribe(data=>{
       this.topTenUsers=data;
       this.route.navigate(["top-user"])
    });
   }

   GetTransaction(){
      this.http.get<Transation[]>("https://localhost:7246/Report/get-transactions")
      .subscribe(data=>{
          this.transactions=data;
            this.route.navigate(["transaction"])
   })
   }

   topTenSeller(){
      this.http.get<TopTenSeller[]>("https://localhost:7246/Report/get-top-ten-seller")
      .subscribe(data=>{
           this.topTenSellers=data;
           console.log(data)
            this.route.navigate(["top-seller"])
   })
   }

   GetTransactionById(id:string){
      var params=new HttpParams()
         .set("userId",id);
      this.http.get<Transation[]>("https://localhost:7246/Report/get-transaction-by-id",{params})
      .subscribe(data=>{
          this.transactions=data;
            this.route.navigate(["transaction"])
   })
  
   }

}
