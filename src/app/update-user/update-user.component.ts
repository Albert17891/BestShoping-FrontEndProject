import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminMangService } from '../admin-manager.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  selectedRecord!:User;

   constructor(public adminService:AdminMangService){}


  ngOnInit() {
    this.selectedRecord=this.adminService.user;
  }

   UpdateUser(form:NgForm){
          const user:User={firstName:form.value.firstName,lastName:form.value.lastName,email:form.value.email,role:""}   
          this.adminService.UpdateUser(user);
   }
}
