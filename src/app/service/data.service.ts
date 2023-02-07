import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser=''
  currentAcno=''
  constructor() { }

  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0,transaction:[]},
    1001:{acno:1001,username:"binu",password:"abc123",balance:0,transaction:[]},
    1002:{acno:1002,username:"jenu",password:"abc123",balance:0,transaction:[]},
    1003:{acno:1003,username:"manu",password:"abc123",balance:0,transaction:[]}
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
        this.currentAcno = acnum
        // console.log(this.currentuser)
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }

  userDeposit(acnum:any,pass:any,amt:any){
    let userDetails = this.userDetails

    // convert amount string to intiger
    var amount = parseInt(amt)

    if(acnum in userDetails){
      if(pass==userDetails[acnum]["password"]) {

        // update balance
        userDetails[acnum]["balance"]+=amount

        // transaction data store
        userDetails[acnum]["transaction"].push({Type:"CREDIT",amount:amount})

        // console.log(userDetails);
        
        // return balance
        return userDetails[acnum]["balance"]
      }else {
        return false
      }
    }else{
      return false
    }
  }

  userWithdraw(acnum:any,pass:any,amt:any){
    let userDetails = this.userDetails

    var amount = parseInt(amt)
    if(acnum in userDetails){
      if(pass == userDetails[acnum]["password"]){
        if(amount <= userDetails[acnum]["balance"]){

          // update balance
          userDetails[acnum]["balance"]-=amount

        // transaction data store
          userDetails[acnum]["transaction"].push({Type:"DEBIT",amount:amount})

          // console.log(userDetails);

          return userDetails[acnum]["balance"]
        }else{
          alert('insufficent balance')
          return false
        }
      }else{
        alert('incorrect password')
        return false
      }
    }else{
      alert('incorrect account number')
      return false
    }
  }
  userTransaction(acnum:any){
    return this.userDetails[acnum]["transaction"]
  }
}
