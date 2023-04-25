import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Transactions } from 'src/app/models/transactions.model';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-send-request-money',
  templateUrl: './send-request-money.component.html',
  styleUrls: ['./send-request-money.component.css']
})
export class SendRequestMoneyComponent implements OnInit {

  amount: string = "";
  contacts: String[] = [];
  contact: string = "";
  completedTransaction: boolean = false;
  mounted: boolean = true;

  constructor(private transactionsService : TransactionsService) { }

  addContact() : void {
    this.contacts.push(this.contact);
    let user : User = {
      username: this.contact,
      id: 0,
      passwd: '',
      balance: 0,
      email: '',
      first_name: '',
      last_name: '',
      phone: '',
      role: ''
    }
    this.transactionsService.findUser(user).subscribe();
  }

  deleteContact(item: number) {
    this.contacts.splice(item, 1);
  }

  completeTransaction() : void{
    this.completedTransaction = !this.completedTransaction;
    let transactions : Transactions = {
      amount:this.amount
    }
    let user : User = {
      id: 0,
      username: this.contact,
      passwd: '',
      balance: 0,
      email: '',
      first_name: "",
      last_name: '',
      phone: '',
      role: ''
    }
    this.transactionsService.postTrans(transactions, user).subscribe();
  }

  ngOnInit(): void {
  
  }

  myControl = new FormControl('');
  options1: String[] = ['Send Amount', 'Request Amount', 'Add To Wallet'];

}
