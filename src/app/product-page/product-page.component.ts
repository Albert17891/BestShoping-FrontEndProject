import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductAddService } from '../product-add.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  
  data!: Product[];

  constructor(private productService:ProductAddService){}
  
  counter=0;

  increment(){  
   
    this.data.forEach(x=>{
      if(x.quantity>=this.counter)
      this.counter++;
    })
   
  }

  decrement(){
    if(this.counter>0)
    this.counter--;
  }

  addToCard(){

  }

  ngOnInit()  {
     this.productService.getProduct()
          .subscribe(data=>{
            this.data=data;
          })
  }    
}
