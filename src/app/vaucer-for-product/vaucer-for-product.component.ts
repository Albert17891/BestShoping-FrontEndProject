import { Component, OnInit } from '@angular/core';

import { VaucerShow } from '../interfaces/Vaucer/VaucerShow';
import { VaucerService } from '../service/vaucer-service';

@Component({
  selector: 'app-vaucer-for-product',
  templateUrl: './vaucer-for-product.component.html',
  styleUrls: ['./vaucer-for-product.component.css']
 
})
export class VaucerForProductComponent implements OnInit {

  vaucers!:VaucerShow[];

  constructor(public vaucerService:VaucerService,
   ){}


  ngOnInit() {
    this.vaucers= this.vaucerService.vaucers         
       
  }

  
}
