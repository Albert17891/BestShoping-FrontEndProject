import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProductResponse } from '../interfaces/ProductResponse';
import { ManagerService } from '../manager.service';
import { Product } from '../Product';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(public managerService:ManagerService,public route:Router,public authService:AuthService){}


  ngOnInit() {
    this.managerService.getMyProduct()
                .subscribe(data=>{
                  this.products=data;
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


