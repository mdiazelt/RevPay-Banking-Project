import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personal-transaction-list',
  templateUrl: './personal-transaction-list.component.html',
  styleUrls: ['./personal-transaction-list.component.css']
})
export class PersonalTransactionListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backButton(){
    this.router.navigate(['personal']);
  }
}
