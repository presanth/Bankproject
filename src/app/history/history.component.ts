import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  transactionData:any
  constructor(private ds:DataService){
    this.transactionData = this.ds.userTransaction(this.ds.currentAcno)
  }
  ngOnInit(): void {
    
  }
}
