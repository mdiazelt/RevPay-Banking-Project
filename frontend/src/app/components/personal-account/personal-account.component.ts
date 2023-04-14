import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css']
})

export class PersonalAccountComponent implements OnInit {

    ngOnInit(): void {
        
    }
  constructor(private route: ActivatedRoute, private router:Router){}
  // showTransactions(){
  // this.router.navigate(['overview'], {relativeTo:this.route});
  // }
}

