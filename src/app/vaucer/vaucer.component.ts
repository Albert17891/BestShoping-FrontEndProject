import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VaucerModel } from '../interfaces/Vaucer/VaucerModel';
import { ProductResponse } from '../interfaces/ProductResponse';
import { ProductAddService } from '../product-add.service';
import { VaucerService } from '../service/vaucer-service';
import { VaucerShow } from '../interfaces/Vaucer/VaucerShow';

@Component({
  selector: 'app-vaucer',
  templateUrl: './vaucer.component.html',
  styleUrls: ['./vaucer.component.css']
})
export class VaucerComponent implements OnInit {

  products!:ProductResponse[];

  vaucers!:VaucerShow[];

  selectedProduct!:ProductResponse;
  
  constructor(public vaucerService:VaucerService,public productService:ProductAddService){}


  ngOnInit() {
    this.productService.getProduct()
    .subscribe(data=>{
      this.products=data;
    })

    this.vaucerService.GetVaucer()
        .subscribe(data=>{
          this.vaucers=data;
          
        })
  }

   deleteVaucer(id:number){
     this.vaucerService.DeleteVaucer(id);
    
   }


  CreateVaucer(f:NgForm){
    var id=localStorage.getItem("id");   
     const vaucer:VaucerModel={userId:id,productId:this.selectedProduct.id
      ,expireTime:f.value.expireTime,price:f.value.price};          
      
      this.vaucerService.CreateVaucer(vaucer);
  }


}
