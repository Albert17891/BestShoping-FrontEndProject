import { Component, OnInit } from '@angular/core';
import { Transation } from '../interfaces/ProductReport/Transaction';
import { ProductReportService } from '../product-report.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
   transactions!:Transation[];

   constructor(public productReport:ProductReportService){}


  ngOnInit() {
    this.transactions=this.productReport.transactions;
  }
}
