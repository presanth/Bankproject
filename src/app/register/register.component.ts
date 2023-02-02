import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uacno=''
  uname=''
  upass=''

  constructor(private ds:DataService,private router:Router){ }

  ngOnInit(): void {
    
  }

  register(){
  var uname=this.uname
  var acno = this.uacno
  var pass = this.upass

  const result=this.ds.dataRegister(acno,uname,pass)
  if(result){
    alert('registered')
    this.router.navigateByUrl('')
  }else{
     alert("acno already ")
  }
  
  }
}
