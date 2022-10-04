import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any

  userDetails:any={
    1000:{acno:1000,username:"amal",password:123},
    1001:{acno:1001,username:"bhim",password:123},
    1002:{acno:1002,username:"ajay",password:123},
    1003:{acno:1003,username:"hari",password:123}
  }

  constructor() { }

  register(acno:any,username:any,password:any){

    let userDetails=this.userDetails
  // in this function we create a logic whic we want to use in another function
    if(acno in userDetails){
     return false
    }else{
      userDetails[acno]={acno,username,password}
      console.log(userDetails);
    
      
      return true;
    }
    

  }


  login(acnum:any,pawrd:any){
  
    let user=this.userDetails
    if(acnum in user){
      if(pawrd==user[acnum]['password']){
        this.currentUser=user[acnum]['username']
        return true

      }else{
        alert('incorrect password')
        return false
      }

    }else{
      alert('user not exist')
      return false
    }
    
  }







}
