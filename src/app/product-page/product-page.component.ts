import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CardProduct } from '../interfaces/CardProduct';
import { CardProductUpdate } from '../interfaces/CardProductUpdate';
import { ProductResponse } from '../interfaces/ProductResponse';
import { VaucerForUser } from '../interfaces/Vaucer/VaucerForUser';
import { Product } from '../Product';
import { ProductAddService } from '../product-add.service';
import { VaucerService } from '../service/vaucer-service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  
  data!: ProductResponse[];
  cardData!:CardProductUpdate[];
  vaucers!:VaucerForUser[];

  constructor(private productService:ProductAddService,private authService:AuthService,
    private vaucerService:VaucerService){}
  
  

  increment(product:CardProductUpdate){       
    product.quantity++;     
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
        
   getVaucerName(name:string){
        alert(name)
   }
    
  ngOnInit()  {
     this.productService.getProduct()
          .subscribe(data=>{
            this.data=data;
            console.log(this.data)
          })         

     this.productService.getCardProduct()
          .subscribe(data=>{
            this.cardData=data;
           
          })  
          
          var userId=localStorage.getItem("userId");

       this.vaucerService.GetVaucerForUser(userId!)
            .subscribe(vaucer=>{
              this.vaucers=vaucer;
              console.log(vaucer)
            })   
  }    
}
