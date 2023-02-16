import { Component, OnInit } from '@angular/core';
import { TopTenSeller } from '../interfaces/ProductReport/TopTenSeller';
import { ProductReportService } from '../product-report.service';

@Component({
  selector: 'app-top-ten-seller',
  templateUrl: './top-ten-seller.component.html',
  styleUrls: ['./top-ten-seller.component.css']
})
export class TopTenSellerComponent implements OnInit {

  topTenSellers!:TopTenSeller[];

  constructor(public reportService:ProductReportService){}


  ngOnInit() {
    this.topTenSellers= this.reportService.topTenSellers;
  }


}
