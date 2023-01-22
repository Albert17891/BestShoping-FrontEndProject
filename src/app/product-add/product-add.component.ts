import { NgForOfContext } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductAddService } from '../product-add.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent {

     onProductAdd(f:NgForm){
         this.addProduct.ProductAdd(f.value.name,f.value.productType);
     }

   constructor(public addProduct:ProductAddService){}
}
