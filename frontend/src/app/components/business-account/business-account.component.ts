import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faLandmark } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'src/app/models/card';
import { BusinessAddCreditCardService } from 'src/app/services/business-add-credit-card.service';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-business-account',
  templateUrl: './business-account.component.html',
  styleUrls: ['./business-account.component.css'],
  providers: [DatePipe]
})
export class BusinessAccountComponent implements OnInit {
  cardForm = new FormGroup({
    //fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    number: new FormControl('', [Validators.required, Validators.maxLength(16)]),
    cvc: new FormControl('', [Validators.required, Validators.minLength(3)]),
    expirationMonth: new FormControl('', [Validators.required]),
    expirationYear: new FormControl('', [Validators.required])
  });


  faFileInvoiceDollar = faFileInvoiceDollar;
  faFileCode = faFileCode;
  faLandmark = faLandmark;


  card: Card;
  userId: number;
  id:number;


  savedCards: Card[] = [];


  constructor(private businessAddCreditCardService: BusinessAddCreditCardService, private authService: AuthService,private fb: FormBuilder,private datePipe: DatePipe) {
  }

  ngOnInit() {
  }

  saveCard(): void {


    const userId = this.getUserId();
    console.log('loggedInUserId:', userId);


    if (userId) {
      const expirationMonth = parseInt(this.cardForm.controls.expirationMonth.value || '');
      const expirationYear = parseInt(this.cardForm.controls.expirationYear.value || '');
      const expirationDate: Date = new Date(expirationYear, expirationMonth - 1, 1);
      const formattedExpiration = formatDate(expirationDate, 'MM-yyyy', 'en-US');
      console.log('Formatted expiration:', formattedExpiration);

      const card: Card = {
        id:this.id,
        number: parseInt(this.cardForm.controls.number.value || '0'),
        expiration: expirationDate,
        cvc: parseInt(this.cardForm.controls.cvc.value || '0')
      };

      console.log('Form data:', this.cardForm.value);

      this.businessAddCreditCardService.postCreditCard(card).subscribe({
        next: (response) => {
          console.log(response);
          console.log('Credit card POST complete:', response);
          console.log("Credit card information: ", card);
          this.savedCards.push(card);
          //const formattedExpiration = this.datePipe.transform(expirationDate, 'MMM-yyyy');
          console.log('Formatted expiration:', formattedExpiration);

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
}


    // const expirationDate: Date = new Date();
    // expirationDate.setFullYear(
    //   parseInt(this.cardForm.controls.expiration.value.year || '0'),
    //   parseInt(this.cardForm.controls.expiration.value.month || '0')
    // );

