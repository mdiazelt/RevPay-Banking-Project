import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personal-wallet',
  templateUrl: './personal-wallet.component.html',
  styleUrls: ['./personal-wallet.component.css']
})
export class PersonalWalletComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

back_button(){
this.router.navigate(['/personal']);
}
trans_button(){
  this.router.navigate(['/personal/transaction-history'])
}
}
