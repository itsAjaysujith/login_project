import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim='your banking partner'
  acno='acnumber'
  accno=''
  pass=''
  
  userDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:100000},
    1001:{acno:1001,username:"bhim",password:123,balance:100000},
    1002:{acno:1002,username:"ajay",password:123,balance:100000},
    1003:{acno:1003,username:"hari",password:123,balance:100000}
  }


  constructor() { }

  ngOnInit(): void {
  }
  

  // login(){
  //   var acnum=this.accno
  //   var pawrd=this.pass
  //   let user=this.userDetails
  //   if(acnum in user){
  //     if(pawrd==user[acnum]['password']){
  //       alert('login success')
  //     }else{
  //       alert('incorrect password')
  //     }

  //   }else{
  //     alert('user not exist')
  //   }
    
  // }



  login(a:any,b:any){

    console.log(a.value);
    console.log(b.value);
    
    
    var acnum=a.value
    var pawrd=b.value
    let user=this.userDetails
    if(acnum in user){
      if(pawrd==user[acnum]['password']){
        alert('login success')
      }else{
        alert('incorrect password')
      }

    }else{
      alert('user not exist')
    }
    
  }

  



}
