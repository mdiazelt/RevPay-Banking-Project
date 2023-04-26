import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import { Card } from 'src/app/models/card';
import { PersonalAddCreditCardService } from 'src/app/services/personal-add-credit-card.service'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css']
})

export class PersonalAccountComponent implements OnInit {

  myControl = new FormControl('');
  options1: String[] = ['Checkings', 'Savings'];

  addCard: boolean = false;
  addBank: boolean = false;

  card: Card;
  userId: number;


  savedCards: Card[] = [];

  cardForm = this._formBuilder.group({
    name:['', Validators.required, Validators.minLength(3)],
    number:['', Validators.required, Validators.maxLength(16)],
    date:['', Validators.required],
    security:['', Validators.required, Validators.minLength(3)],
    cardType:['']
  })

  constructor(private personalAddCreditCardService: PersonalAddCreditCardService, private authService: AuthService, private _formBuilder:FormBuilder, private route: ActivatedRoute, private router:Router){}


  submittedCard() : void {
    this.addCard = !this.addCard;
    const userId = this.getUserId();
    console.log('loggedInUserId:', userId);

    if (userId) {
      const date = parseInt(this.cardForm.controls.date.value || '');
      const expirationDate: Date = new Date(date - 1, 1);

      const card: Card = {
        id: 0,
        number: parseInt(this.cardForm.controls.number.value || '0'),
        expiration: expirationDate,
        cvc: parseInt(this.cardForm.controls.security.value || '0')
      };

      console.log('Form data:', this.cardForm.value);

      this.personalAddCreditCardService.postCreditCard(card).subscribe({
        next: (response) => {
          console.log(response);
          console.log('Credit card POST complete:', response);
          console.log("Credit card information: ", card);
        },
        error: (error) => {
          console.log(error);
          console.log('Credit card POST failed:', error);
        },
      });
    } else {
      console.log('loggedIn:', this.authService.loggedIn);
    } 
  }


  numbersOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      console.log('charCode restricted is ' + charCode);
      return false;
    }
    return true;
  }

  private getUserId(): number | null {
    const userId = sessionStorage.getItem('userId') || (localStorage.getItem('userId'));
    if (!userId) {
      console.log('User ID not found');
      return null;
    }
    return parseInt(userId);
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

  bankForm = this._formBuilder.group({
    account:[''],
    routing:[''],
    accoutType:['']
  })

  // showTransactions(){
  // this.router.navigate(['overview'], {relativeTo:this.route});
  // }
}

