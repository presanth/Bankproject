import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser=''
  constructor() { }

  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:1001,username:"binu",password:"abc123",balance:0},
    1002:{acno:1002,username:"jenu",password:"abc123",balance:0},
    1003:{acno:1003,username:"manu",password:"abc123",balance:0}
  }
  dataRegister(acno:any,uname:any,psw:any){
    if(acno in this.userDetails){
      return false
    }else{
      this.userDetails[acno]={acno,username:uname,password:psw,balance:0}
      console.log(this.userDetails);
      
      return true
    }
  }
  userLogin(acnum:any,pswrd:any){
    var userDetails = this.userDetails
    if(acnum in userDetails){
      if(pswrd == userDetails[acnum]["password"]){
        this.currentuser = userDetails[acnum]["username"]
        console.log(this.currentuser)
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }
}
