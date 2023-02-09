import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  constructor(private router:Router,private ds:DataService,private fb:FormBuilder){ }


  // create reactive form of login form
  loginForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pass:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })
  ngOnInit () : void {

  }
  login(){
    var acnum = this.loginForm.value.acno
    var pswrd = this.loginForm.value.pass

    if(this.loginForm.valid){
      var result = this.ds.userLogin(acnum,pswrd)
      if(result){
        alert('login success')
        this.router.navigateByUrl('dashbord')
      }else{
        alert('incorrect acno or pass')
      }
    }else{
      alert('invalid login input')
    }

  }

}
