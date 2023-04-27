import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/models/card';
import { DatePipe } from '@angular/common';

import { PersonalAddCreditCardService } from 'src/app/services/personal-add-credit-card.service';
@Component({
  selector: 'app-personal-wallet',
  templateUrl: './personal-wallet.component.html',
  styleUrls: ['./personal-wallet.component.css'],
  providers: [DatePipe]
})
export class PersonalWalletComponent implements OnInit {

  constructor(private datePipe: DatePipe, private router:Router,private personalAddCreditCardService:PersonalAddCreditCardService) { }

  ngOnInit(): void {
    this.personalAddCreditCardService.getCreditCard().subscribe(json => {
      this.savedCards = json;
      this.showCards = true;
    });
  }

  @Input() savedCards: Card[]=[];
  showCards: boolean = false;


back_button(){
  console.log('Back button clicked');
  this.router.navigateByUrl('/personal');
}
trans_button(){
  this.router.navigate(['/personal/transaction-history'])
}

// getCreditCardList():void{
//  this.showCards = !this.showCards;
//   this.savedCards = []; // Clear savedCards array
//   this.personalAddCreditCardService.getCreditCard().subscribe(json => {
//     this.savedCards = json;
//   });
// }
}

