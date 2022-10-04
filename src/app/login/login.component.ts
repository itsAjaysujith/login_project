import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  acno='Mobile number'
  accno=''
  pass=''
  



  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  

  login(){
    
    var acnum=this.accno
    var pawrd=this.pass
    const log=this.ds.login(acnum,pawrd)
    if(log){
      alert('login success')
      this.router.navigateByUrl('dashboard')

    }
    
  }





  



}
