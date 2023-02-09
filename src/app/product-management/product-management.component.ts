import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductWithOwner } from '../interfaces/ProductManagement/ProductWithOwner';
import { ProductManagementService } from '../product-management.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {

   data!:ProductWithOwner[];

   constructor(public productManagement:ProductManagementService){}


   deleteProduct(id:number){       
        this.productManagement.DeleteProduct(id);
   }
     
  ngOnInit() {   
         this.productManagement.getProductWithOwner()
         .subscribe(response=>{
          this.data=response;    
               
         });
    
  }


}
