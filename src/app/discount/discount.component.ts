import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DiscountRequest } from '../interfaces/Discount/DiscountRequest';
import { DiscountResponse } from '../interfaces/Discount/DiscountResponse';
import { DiscountService } from '../service/Discount/discount.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  constructor(public discountService:DiscountService){}
  
   discounts!:DiscountResponse[];



  createDiscount(f:NgForm){
    
    var stringId=localStorage.getItem("productId");

    const discount:DiscountRequest={productId:JSON.parse(stringId!.toString()),startTime:f.value.startTime,endTime:f.value.endTime,percent:f.value.percent}
    this.discountService.createDiscount(discount);
  }

  deleteDiscount(id:number){
        this.discountService.deleteDiscount(id);
  }

  ngOnInit() {
       this.discountService.getDiscounts()
                 .subscribe(data=>{
                  this.discounts=data;
                 })
  }
}
