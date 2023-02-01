import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  acno=""
  pass=""
  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:1001,username:"binu",password:"abc123",balance:0},
    1002:{acno:1002,username:"jenu",password:"abc123",balance:0},
    1003:{acno:1003,username:"manu",password:"abc123",balance:0}
  }
  constructor(){ }
  ngOnInit () : void {

  }
  login(){
    var acnum = this.acno
    var pswrd = this.pass
    var userDetails = this.userDetails
    if(acnum in userDetails){
      if(pswrd == userDetails[acnum]["password"]){
        alert('login success')
      }else{
        alert('incorrect password')
      }
    }else{
      alert('incorrect acccount number or not registerd');
    }
  }

}
