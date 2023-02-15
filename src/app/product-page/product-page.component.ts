import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CardProduct } from '../interfaces/CardProduct';
import { CardProductUpdate } from '../interfaces/CardProductUpdate';
import { ProductResponse } from '../interfaces/ProductResponse';
import { BuyProductInfoRequest} from '../interfaces/UserAccount/BuyProductInfoRequest';
import { BuyProductRequest } from '../interfaces/UserAccount/BuyProductRequest';
import { UserAccountResponse } from '../interfaces/UserAccount/UserAccountResponse';
import { VaucerForUser } from '../interfaces/Vaucer/VaucerForUser';
import { UseVaucerRequest } from '../interfaces/Vaucer/UseVaucerRequest';
import { Product } from '../Product';
import { ProductAddService } from '../product-add.service';
import { UserAccountService } from '../service/user-account.service';
import { VaucerService } from '../service/vaucer-service';
import { VaucerUserResponse } from '../interfaces/Vaucer/VaucerUserResponse';
import { DiscountService } from '../service/Discount/discount.service';
import { DiscountResponse } from '../interfaces/Discount/DiscountResponse';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  
  data!:ProductResponse[];
  cardData!:CardProductUpdate[];
 
  vaucers!:VaucerForUser[];
  amount!:number;
  discountResponse!:DiscountResponse[];

  constructor(private productService:ProductAddService,private authService:AuthService,
    private vaucerService:VaucerService,private userAccountService:UserAccountService
    ,private discountService:DiscountService){}
  
  

  increment(product:CardProductUpdate){       
    product.quantity++;
    
    let sumPrice=0;
      
    if(product.price*product.quantity!=product.sumPrice){
      var differentedPrice=product.price+product.sumPrice;
      
      sumPrice=differentedPrice;
    }
    else{
      sumPrice=product.price*product.quantity;
    }

    

    this.productService.CardProductUpdateInc(product.id,product.productId,product.name,product.type,
                                             product.quantity,product.price,sumPrice)   
    
                                             
  }

  decrement(product:CardProductUpdate){
    if(product.quantity>0)
    product.quantity--;

    let sumPrice=0;
      
    if(product.price*product.quantity!=product.sumPrice){
      var differentedPrice=product.sumPrice-product.price;      
      sumPrice=differentedPrice;
    }
    else{
      sumPrice=product.price*product.quantity;
    }

   
    this.productService.CardProductUpdateDec(product.id,product.productId,product.name,product.type,
                                            product.quantity,product.price,sumPrice)       

                                        
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
      
     var cardPrice=0;
     var buyProducts:BuyProductInfoRequest[]=[];  

      
    this.cardData.forEach(element => {
      
        cardPrice+=element.price;
        
       var buyProduct:BuyProductInfoRequest={id:element.id,productId:element.productId,price:element.sumPrice}
         
        buyProducts.push(buyProduct)
      });
      
      if(cardPrice>this.amount){
       
        alert("თქვენ ანგარიშზე არ არის საკმარისი თანხა")
      }
      else{
        var userId=localStorage.getItem("userId");
        const purchase:BuyProductRequest={userId:userId!,buyProducts:buyProducts}
        this.userAccountService.buy(purchase);        
      }

   }
   
   vaucerName!:string;   
   vaucerUserResponse!:VaucerUserResponse;
  
   
   getVaucer(id:number){
    if(this.vaucerName==null)
    {
    alert("VaucerName is Empty")    
    }
    else{      
      var userId=localStorage.getItem("userId");
      const vaucerRequest:UseVaucerRequest={id:id,userId:userId!,vaucerName:this.vaucerName}
      this.vaucerService.UseVaucer(vaucerRequest)
          .subscribe(response=>{            
            alert(response.status);
            location.reload();           
          });         
    }      
   }

   totalPrice!:number

   getPrice(price:number,sumPrice:number):number{
       var vaucerPrice=price-sumPrice;  
       this.totalPrice=price-vaucerPrice;    
       return price-vaucerPrice;   

   }

   deleteCardProduct(id:number){
        this.productService.CardProductDeleteWithId(id);
   }
    
  ngOnInit()  {    


  this.productService.getProduct()
                    .subscribe(data=>{
                      this.data=data
                    })
                

   this.productService.getCardProduct()
               .subscribe(res=>{
                this.cardData=res;
               })
                        ///
                      
          
          
          var userId=localStorage.getItem("userId");

       this.vaucerService.GetVaucerForUser(userId!)
            .subscribe(vaucer=>{
              this.vaucers=vaucer;
              console.log(vaucer)
            })   
      
      this.userAccountService.GetUserAccount(userId!)
                             .subscribe(account=>{
                              this.amount=account.amount;
                             })
        this.discountService.getDiscounts()
                      .subscribe(data=>{
                        this.discountResponse=data;
                      })                     

  }    
}
