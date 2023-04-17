import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-business-account',
  templateUrl: './business-account.component.html',
  styleUrls: ['./business-account.component.css']
})
export class BusinessAccountComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
  }

  numbersOnly(event:any):boolean{
    const charCode = (event.which)?event.which: event.keyCode;
    if(charCode >31 && (charCode <48 || charCode > 57)){
      console.log('charCode restricted is ' + charCode);
      return false;
    }
    return true;
  }
}
