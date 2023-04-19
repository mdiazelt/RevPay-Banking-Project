import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons';
import {faFileCode} from '@fortawesome/free-regular-svg-icons';
import {faLandmark} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-business-account',
  templateUrl: './business-account.component.html',
  styleUrls: ['./business-account.component.css']
})
export class BusinessAccountComponent implements OnInit {
  faFileInvoiceDollar = faFileInvoiceDollar;
  faFileCode=faFileCode;
  faLandmark=faLandmark;
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
