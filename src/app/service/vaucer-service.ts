import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteVaucerRequest } from '../interfaces/Vaucer/DeleteVaucerRequest';
import { VaucerForUser } from '../interfaces/Vaucer/VaucerForUser';
import { VaucerModel } from '../interfaces/Vaucer/VaucerModel';
import { UseVaucerRequest } from '../interfaces/Vaucer/UseVaucerRequest';
import { VaucerShow } from '../interfaces/Vaucer/VaucerShow';
import { VaucerUserResponse } from '../interfaces/Vaucer/VaucerUserResponse';

@Injectable({
  providedIn: 'root'
})
export class VaucerService {

  constructor(public http:HttpClient) { }

  CreateVaucer(vaucerData:VaucerModel){
        this.http.post("https://localhost:7246/Admin/create-vaucer",vaucerData)
        .subscribe()
  }

  GetVaucer():Observable<VaucerShow[]>{
    return this.http.get<VaucerShow[]>("https://localhost:7246/Admin/get-vaucer");
  }

  DeleteVaucer(id:number){   
    const deleteVaucer:DeleteVaucerRequest={id:id};    
   
    this.http.post("https://localhost:7246/Admin/delete-vaucer",deleteVaucer)
      .subscribe();
  }

  GetVaucerForUser(id:string):Observable<VaucerForUser[]>{

     const params=new HttpParams()
     .set("userId",id);

       return this.http.get<VaucerForUser[]>("https://localhost:7246/User/get-user-vaucer",{params});
  }    
  
  UseVaucer(vaucerRequest:UseVaucerRequest):Observable<VaucerUserResponse>{
   
     return this.http.post<VaucerUserResponse>("https://localhost:7246/User/use-vaucer",vaucerRequest);
  }

}
