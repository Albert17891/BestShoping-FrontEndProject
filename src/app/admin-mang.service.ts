import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateRole } from './interfaces/UpdateRole';
import { User } from './interfaces/User';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class AdminMangService {

  constructor(public http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>("https://localhost:7246/Admin");
  }  

  UpdateRoles(email:string){
    const updateRole:UpdateRole={email:email}
    this.http.post("https://localhost:7246/Admin/update-role",updateRole)
         .subscribe();
  }

  getMyProduct():Observable<Product[]>{
    return this.http.get<Product[]>("https://localhost:7246/Product/get-my-product");
  }
}
