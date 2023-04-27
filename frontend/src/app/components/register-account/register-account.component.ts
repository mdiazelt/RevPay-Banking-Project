import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {

  user:User;
  username:string = "";
  passwd:string = "";
  first_name:string = "";
  last_name:string = "";
  email:string = "";
  phone:string = "";
  role:string = "";
  registered:boolean = false;
  constructor(private router:Router, private registerService : RegisterService) { }


  ngOnInit() {
    this.resetForm();
  }

  register() : void {
    this.registered = !this.registered;
    let user : User = {
      username: this.username,
      passwd: this.passwd,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      phone: this.phone,
      role: this.role,
      id: 0,
      balance: 0,
    };
    if (this.role == "Personal"){
      this.registerService.registerPersonal(user).subscribe();
    } else this.registerService.registerBusiness(user).subscribe();
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
      email:'',
      first_name:'',
      last_name:'',
      role:'',
      phone:'',
      id:0,
      balance:0
    }

  }
}
