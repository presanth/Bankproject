import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  acno=""
  pass=""
  constructor(private router:Router,private ds:DataService){ }
  ngOnInit () : void {

  }
  login(){
    var acnum = this.acno
    var pswrd = this.pass
    var userDetails = this.ds.userDetails
    if(acnum in userDetails){
      if(pswrd == userDetails[acnum]["password"]){
        alert('login success')
        this.router.navigateByUrl('dashbord')
      }else{
        alert('incorrect password')
      }
    }else{
      alert('incorrect acccount number or not registerd');
    }
  }

}
