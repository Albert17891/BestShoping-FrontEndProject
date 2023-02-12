import { Component, OnInit } from '@angular/core';
import { TopProduct } from '../interfaces/ProductReport/TopProduct';
import { ProductReportService } from '../product-report.service';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.css']
})
export class TopProductComponent implements OnInit {

  topTenProduct!:TopProduct[];

  constructor(public productReporService:ProductReportService){}

  ngOnInit() {
       this.topTenProduct=this.productReporService.topTenProduct;
  }

  
}
