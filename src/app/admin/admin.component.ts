import { Component, OnInit } from '@angular/core';
import { AdminMangService } from '../admin-mang.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users!:User[];

  constructor(public adminManager:AdminMangService){}

  onSelectionChange(email:string){
          this.adminManager.UpdateRoles(email);
  }

  ngOnInit() {
    this.adminManager.getUsers()
                .subscribe(data=>{
                  this.users=data      
                  console.log(data)  ;                            
                })
  }

  
  
}
