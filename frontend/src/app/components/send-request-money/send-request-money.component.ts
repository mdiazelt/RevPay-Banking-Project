import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-request-money',
  templateUrl: './send-request-money.component.html',
  styleUrls: ['./send-request-money.component.css']
})
export class SendRequestMoneyComponent implements OnInit {

  contacts: String[] = [];
  contact: String = "";
  completedTransaction: boolean = false;


  constructor() { }

  addContact() {
    this.contacts.push(this.contact);
  }

  completeTransaction() {
    this.completedTransaction = !this.completedTransaction;
  }

  ngOnInit(): void {
  }

}
