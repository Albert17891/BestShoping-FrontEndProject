import { Component, OnInit } from '@angular/core';
import { TopUsers } from '../interfaces/ProductReport/TopUser';
import { ProductReportService } from '../product-report.service';

@Component({
  selector: 'app-top-user',
  templateUrl: './top-user.component.html',
  styleUrls: ['./top-user.component.css']
})
export class TopUserComponent implements OnInit {
    
  topUsers!:TopUsers[];

  constructor(public reportService:ProductReportService){}


  ngOnInit(){
    this.topUsers=this.reportService.topTenUsers                   
  }
}
