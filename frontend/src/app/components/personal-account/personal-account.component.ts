import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css']
})

export class PersonalAccountComponent implements OnInit {

  addCard: boolean = false;
  addBank: boolean = false;

  submittedCard() {
    this.addCard = !this.addCard;
  }

  submittedBank() {
    this.addBank = !this.addBank;
  }


    ngOnInit(): void {
        
    }

  constructor(private route: ActivatedRoute, private router:Router){}
  // showTransactions(){
  // this.router.navigate(['overview'], {relativeTo:this.route});
  // }
}

