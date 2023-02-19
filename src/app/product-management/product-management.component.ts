import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { ProductWithOwner } from '../interfaces/ProductManagement/ProductWithOwner';
import { ProductManagementService } from '../product-management.service';
import{VaucerShow} from '../interfaces/Vaucer/VaucerShow';
import { VaucerService } from '../service/vaucer-service';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import { VaucerForProductComponent } from '../vaucer-for-product/vaucer-for-product.component';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css'],
 
})
export class ProductManagementComponent implements OnInit {

   data!:ProductWithOwner[];
  

   constructor(public productManagement:ProductManagementService,public router:Router,
                    public vaucerService:VaucerService,
                     ){}


   goReport(){
       this.router.navigate(["product-report"]);
   }

   deleteProduct(id:number){       
        this.productManagement.DeleteProduct(id);
   }

   getVaucer(id:number){    
        this.vaucerService.getVaucerByProductId(id);                         
   }

   

   

     
  ngOnInit() {   
         this.productManagement.getProductWithOwner()
         .subscribe(response=>{
          this.data=response;    
               
         });
    
  }



}
