import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {
  user:User;
  constructor(private router:Router) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(){
    this.router.navigate(['/personal']);
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.reset();
    this.user = {
      username:'',
      passwd:'',
      email_address:'',
      first_name:'',
      last_name:'',
      phone:'',
      roles:[]
    }
  }
}
