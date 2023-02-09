import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  user=''


  acn2=''
  amt2=''
  pass2=''
  constructor(private ds:DataService,private fb:FormBuilder){
    this.user=this.ds.currentuser
  }

  // create reactive form of deposit form
  depositForm = this.fb.group({
    acn1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    amt1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pass1:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })

  // create reactive form of deposit form
  withdrawForm = this.fb.group({
    acn2:['',[Validators.required,Validators.pattern('[0-9]+')]],
    amt2:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pass2:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })
  ngOnInit(): void {
    
  }

  deposit(){
    var acn = this.depositForm.value.acn1
    var amt = this.depositForm.value.amt1
    var pass = this.depositForm.value.pass1
    if(this.depositForm.valid){
      let result = this.ds.userDeposit(acn,pass,amt)
      if(result){
        alert(`your account has been credited with amount ${amt} . and the current balance is ${result}`)
      }else{
        alert('incurrent password or account number')
      }
    }else{
      alert('invalid deposit form')
    }
  }
  withdraw(){
    var acn = this.withdrawForm.value.acn2
    var amt = this.withdrawForm.value.amt2
    var pass = this.withdrawForm.value.pass2

    if(this.withdrawForm.valid){
      const result = this.ds.userWithdraw(acn,pass,amt)
      if(result){
        alert(`your account has been debited amount ${amt} . and the current balance is ${result}`)
      }
    }else{
      alert('invalid withdraw form')
    }
  }
}
