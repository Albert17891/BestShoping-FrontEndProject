import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CardProduct } from '../interfaces/CardProduct';
import { CardProductUpdate } from '../interfaces/CardProductUpdate';
import { ProductResponse } from '../interfaces/ProductResponse';
import { BuyProductInfoRequest} from '../interfaces/UserAccount/BuyProductInfoRequest';
import { BuyProductRequest } from '../interfaces/UserAccount/BuyProductRequest';
import { UserAccountResponse } from '../interfaces/UserAccount/UserAccountResponse';
import { VaucerForUser } from '../interfaces/Vaucer/VaucerForUser';
import { Product } from '../Product';
import { ProductAddService } from '../product-add.service';
import { UserAccountService } from '../service/user-account.service';
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
  account!:UserAccountResponse;

  constructor(private productService:ProductAddService,private authService:AuthService,
    private vaucerService:VaucerService,private userAccountService:UserAccountService){}
  
  

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

// Buy function
   buy(){
      
     var cardQuantity=0;
     var buyProducts:BuyProductInfoRequest[]=[];

    this.cardData.forEach(element => {
        cardQuantity+=element.quantity;

       var buyProduct:BuyProductInfoRequest={productId:element.productId,price:element.price}
         
        buyProducts.push(buyProduct)
      });

      if(cardQuantity>this.account.amount){
        alert("თქვენ ანგარიშზე არ არის საკმარისი თანხა")
      }
      else{
        var userId=localStorage.getItem("userId");
        const purchase:BuyProductRequest={userId:userId!,buyProducts:buyProducts}
        this.userAccountService.buy(purchase);
        
      }

   }
   
   vaucerName!:string;

   getVaucer(){
      
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
      
      this.userAccountService.GetUserAccount(userId!)
                             .subscribe(account=>{
                              this.account=account;
                             })

  }    
}
