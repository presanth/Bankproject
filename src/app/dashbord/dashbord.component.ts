import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  user=''

  acn1=''
  amt1=''
  pass1=''

  acn2=''
  amt2=''
  pass2=''
  constructor(private ds:DataService){
    this.user=this.ds.currentuser
  }
  ngOnInit(): void {
    
  }

  deposit(){
    var acn = this.acn1
    var amt = this.amt1
    var pass = this.pass1

    let result = this.ds.userDeposit(acn,pass,amt)
    if(result){
      alert(`your account has been credited with amount ${amt} . and the current balance is ${result}`)
    }else{
      alert('incurrent password or account number')
    }
  }
  withdraw(){
    var acn = this.acn2
    var amt = this.amt2
    var pass = this.pass2

    const result = this.ds.userWithdraw(acn,pass,amt)

    if(result){
      alert(`your account has been debited amount ${amt} . and the current balance is ${result}`)
    }else{
      alert('not correct')
    }
  }
}
