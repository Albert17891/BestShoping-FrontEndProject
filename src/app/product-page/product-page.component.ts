import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CardProduct } from '../interfaces/CardProduct';
import { CardProductUpdate } from '../interfaces/CardProductUpdate';
import { ProductResponse } from '../interfaces/ProductResponse';
import { Product } from '../Product';
import { ProductAddService } from '../product-add.service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  
  data!: ProductResponse[];
  cardData!:CardProductUpdate[];

  constructor(private productService:ProductAddService,private authService:AuthService){}
  
  

  increment(product:CardProductUpdate){       
    product.quantity++; 
    console.log(product.id);
    this.productService.CardProductUpdateInc(product.id,product.productId,product.name,product.type,product.quantity,product.price)   
    
  }

  decrement(product:CardProductUpdate){
    if(product.quantity>0)
    product.quantity--;
    this.productService.CardProductUpdateDec(product.id,product.productId,product.name,product.type,product.quantity,product.price)  
    
  }

   onAddToCard(product:ProductResponse){
         
         this.productService.CardProductAdd(product.id,product.name,product.type,product.quantity=0,product.price)
        
   }


   onLogOut(){
    this.authService.LogOut();
   }

  
   products!:Product[]
        

  ngOnInit()  {
     this.productService.getProduct()
          .subscribe(data=>{
            this.data=data;
          })         

     this.productService.getCardProduct()
          .subscribe(data=>{
            this.cardData=data;
            console.log(this.cardData)
          })     
  }    
}
