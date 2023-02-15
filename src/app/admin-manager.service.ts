import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DeleteUser } from './interfaces/DeleteUser';
import { UpdateRole } from './interfaces/UpdateRole';
import { User } from './interfaces/User';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class AdminMangService {

  constructor(public http:HttpClient,public router:Router) { }

  user!:User;


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

  UpdateUser(user:User){
    this.http.post("https://localhost:7246/Admin/update-user",user)
    .pipe(map((res) => {
      this.router.navigate(["/user-management"]);
    }))
    .subscribe();
  }

  DeleteUser(email:string){
     const deleteUser:DeleteUser={email:email}
    this.http.post("https://localhost:7246/Admin/delete-user",deleteUser)
    .subscribe(res=>{
      location.reload();
    });
  }

  
}
