import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acnum=''
  pas=''
  amt=''


  acnum1=''
  pas1=''
  withd=''
  userOf=''

  constructor(private ds:DataService) {
    this.userOf=this.ds.currentUser


   }

  ngOnInit(): void {
  }






}
