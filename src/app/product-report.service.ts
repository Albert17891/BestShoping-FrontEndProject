import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TopProduct } from './interfaces/ProductReport/TopProduct';
import { TopUsers } from './interfaces/ProductReport/TopUser';

@Injectable({
  providedIn: 'root'
})
export class ProductReportService {

  constructor(public http:HttpClient,public route:Router) { }

  topTenProduct!:TopProduct[];
  topTenUsers!:TopUsers[];

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

   AveragePrice(){
    
   }

}
