import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {
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
  }
}
