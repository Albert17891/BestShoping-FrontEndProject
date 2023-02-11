import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TopProduct } from './interfaces/ProductReport/TopProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductReportService {

  constructor(public http:HttpClient) { }

   topTen():Observable<TopProduct[]>{
        return this.http.get<TopProduct[]>("https://localhost:7246/Report/get-top-ten");
   }

}
