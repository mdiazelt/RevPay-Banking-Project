import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
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
  password:string = "";
  first_name:string = "";
  last_name:string = "";
  email_address:string = "";
  phone:string = "";
  type_of_account:string = "";
  constructor(private router:Router, private registerService : RegisterService) { }

  ngOnInit() {
    this.resetForm();
  }

  register() : void {
    let user : User = {
      username:this.username,
      password:this.password,
      first_name:this.first_name,
      last_name:this.last_name,
      email_address:this.email_address,
      phone:this.phone,
      type_of_account:this.type_of_account
    };
    this.registerService.registerBusiness(user).subscribe();
    this.registerService.registerPersonal(user).subscribe();
  }

  onSubmit(){
    this.router.navigate(['/personal']);
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.reset();
    this.user = {
      username:'',
      password:'',
      email_address:'',
      first_name:'',
      last_name:'',
      type_of_account:'',
      phone:'',
    }
  }
}
