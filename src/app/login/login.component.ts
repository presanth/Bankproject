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

    var result = this.ds.userLogin(acnum,pswrd)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashbord')
    }else{
      alert('incorrect acno or pass')
    }
  }

}
