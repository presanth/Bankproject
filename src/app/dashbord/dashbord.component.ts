import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  user=''
  constructor(private ds:DataService){
    this.user=this.ds.currentuser
  }
  ngOnInit(): void {
    
  }
}
