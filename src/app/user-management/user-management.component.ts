import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminMangService } from '../admin-manager.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users!:User[];

  constructor(public adminManager:AdminMangService,public router:Router){}

  onSelectionChange(email:string){
          this.adminManager.UpdateRoles(email);
  }


   updateUser(user:User){
         this.adminManager.user=user;  
         this.router.navigate(["/update-user"])
   }

   deleteUser(email:string){
      this.adminManager.DeleteUser(email);
   }


  ngOnInit() {
    this.adminManager.getUsers()
                .subscribe(data=>{
                  this.users=data    
                                        
                })
  }
}
