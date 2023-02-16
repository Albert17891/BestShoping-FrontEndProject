import { Component } from '@angular/core';
import { TopProduct } from '../interfaces/ProductReport/TopProduct';
import { ProductReportService } from '../product-report.service';

@Component({
  selector: 'app-product-report',
  templateUrl: './product-report.component.html',
  styleUrls: ['./product-report.component.css']
})
export class ProductReportComponent {

  

  constructor(public productReportService:ProductReportService){}

  topTen(){
        this.productReportService.topTen();       
  }

  AveragePrice(){

  }

  topTenSeller(){
     this.productReportService.topTenSeller();
  }

  topTenUser(){
          this.productReportService.GetTopTenUsers();
  }
}
