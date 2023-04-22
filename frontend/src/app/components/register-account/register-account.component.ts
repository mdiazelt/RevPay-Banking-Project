import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

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
  email_address:string = "";
  phone:string = "";
  role:string = "";
  constructor(private router:Router, private registerService : RegisterService) { }


  ngOnInit() {
    this.resetForm();
  }

  register() : void {
    let user : User = {
      username:this.username,
      passwd:this.passwd,
      first_name:this.first_name,
      last_name:this.last_name,
      email_address:this.email_address,
      phone:this.phone,
      type_of_account:this.type_of_account
    };
    if (this.type_of_account == "Personal"){
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
      email_address:'',
      first_name:'',
      last_name:'',
      role:'',
      phone:'',
    }

  }
}
