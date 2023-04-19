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
  mounted: boolean = true;

  constructor() { }

  addContact() {
    this.contacts.push(this.contact);
  }

  deleteContact(item: number) {
    this.contacts.splice(item, 1);
  }
  completeTransaction() {
    this.completedTransaction = !this.completedTransaction;
  }

  ngOnInit(): void {
  
  }

}
