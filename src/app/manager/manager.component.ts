import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProductResponse } from '../interfaces/ProductResponse';
import { UserAccountResponse } from '../interfaces/UserAccount/UserAccountResponse';
import { ManagerService } from '../manager.service';
import { Product } from '../Product';
import { UserAccountService } from '../service/user-account.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  amount!:number;


  constructor(public managerService:ManagerService,public route:Router,public authService:AuthService,
                                                  public userAccountService:UserAccountService){}


  ngOnInit() {
    this.managerService.getMyProduct()
                .subscribe(data=>{
                  this.products=data;
                })
                var userId=localStorage.getItem("userId");

                this.userAccountService.GetUserAccount(userId!)
                             .subscribe(account=>{
                              this.amount=account.amount;                              
                             })
  }

  products!:ProductResponse[]

  updateProduct(product:ProductResponse){
     this.managerService.iniProduct(product);
     this.route.navigate(["update"])
  }


  deleteProduct(product:ProductResponse){
    this.managerService.deleteProduct(product)
  }

  onLogOut(){
    this.authService.LogOut();
   }

}


