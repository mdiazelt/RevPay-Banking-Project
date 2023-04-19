import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-invoices',
  templateUrl: './business-invoices.component.html',
  styleUrls: ['./business-invoices.component.css']
})
export class BusinessInvoicesComponent implements OnInit {
  note:string='';
  maxLength:number =250;
  characterCount:number =0;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  updateCharacterCount(event:any){
    this.characterCount = event.target.value.length;
  }
  backButton(){
    this.router.navigate(['/business'])
  }
}
