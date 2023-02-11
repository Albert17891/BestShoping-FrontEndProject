import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminMangService } from '../admin-manager.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {  
  
  constructor(public router:Router){}

  UserManagement(){
    this.router.navigate(["/user-management"])
  }

  ProductManagement(){
    this.router.navigate(["/product-management"])
  }

  
}
