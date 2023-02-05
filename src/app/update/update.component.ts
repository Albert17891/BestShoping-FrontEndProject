import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductResponse } from '../interfaces/ProductResponse';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
selectedRecord!: ProductResponse;

constructor(public managerService:ManagerService,){}


  ngOnInit() {
    this.selectedRecord=this.managerService.product;
    
  }

updateProduct(product:NgForm){
  this.managerService.updateProduct(this.selectedRecord.id,product.value.name,product.value.type,product.value.quantity,product.value.price);
   
}

}
