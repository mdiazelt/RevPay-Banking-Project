import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css']
})

export class PersonalAccountComponent implements OnInit {

  card:Card;
  number:string = "";
  expiration:string = "";
  cvc:string = "";

  myControl = new FormControl('');
  options1: String[] = ['Checkings', 'Savings'];

  addCard: boolean = false;
  addBank: boolean = false;

  constructor(private _formBuilder:FormBuilder, private route: ActivatedRoute, private router:Router, private cardService : CardService){}

  submittedCard() : void {
    this.addCard = !this.addCard;
    let card : Card = {
      number: this.number,
      expiration: this.expiration,
      cvc: this.cvc
    };
    this.cardService.addCard(card).subscribe();
  }

  submittedBank() {
    this.addBank = !this.addBank;
  }

  ngOnInit(): void {
        
  }

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  cardForm = this._formBuilder.group({
    name:[''],
    number:[''],
    date:[''],
    security:[''],
    cardType:['']
  })

  bankForm = this._formBuilder.group({
    account:[''],
    routing:[''],
    accoutType:['']
  })

  // showTransactions(){
  // this.router.navigate(['overview'], {relativeTo:this.route});
  // }
}

