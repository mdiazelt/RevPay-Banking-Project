import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.component.html',
  styleUrls: ['./login-account.component.css']
})
export class LoginAccountComponent implements OnInit {
  // form = new FormGroup({
  //   username: new FormControl(null, Validators.required),
  //   password: new FormControl(null,Validators.required),
  // });
  isLoginFailed = false;
  username = '';
  password = '';
  role='';
  errorMessage = '';


  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    let user:User = {
      id: 0,
      username: this.username,
      passwd: this.password,
      balance: 0,
      email: '',
      phone: '',
      role:this.role,
      first_name: '', 
      last_name: '',
    }
    // if(this.form.invalid){
    //   return;
    // }
    this.authService.login(user).subscribe({
      next: (loginUser:any) => {
        console.log(loginUser);
        this.authService.accInfo = loginUser;
        this.isLoginFailed = false;
        this.authService.loggedIn = true;
  
        // Check the loginUser.role value
        console.log('loginUser.role:', loginUser.role);
  
        // Navigate to PersonalAccountComponent directly
        if (loginUser.role === 'personal') {
          this.router.navigateByUrl('/personal');
        }
  
        // Navigate to BusinessAccountComponent directly
        if (loginUser.role === 'business') {
          this.router.navigateByUrl('/business');
        }

      },
      error: err => {
        this.isLoginFailed  = true;
        this.errorMessage = err.message;
      }
    });
  }
  
}

  // onSubmit(): void {
  //   const user: User = {
  //     username: this.form.username,
  //     passwd: this.form.password,
  //     first_name: '',
  //     last_name: '',
  //     email_address: '',
  //     phone: '',
  //     roles:[]
  //   };

  //   this.authService.login(user.username, user.passwd).subscribe({
  //     next: (data: { token: string; userType: string; }) => {
  //       console.log('User logged in with token:', data.token);
  //       // this.authService.setLoggedIn(true);
  //       // if (data.userType === 'personal') {
  //       //   this.router.navigate(['/personal']);
  //       // } else if (data.userType === 'business') {
  //       //   this.router.navigate(['/business']);
  //       // }
  //     },
  //     error: (err: any) => {
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //     }
  //   });    
  // }
  // onSubmit(): void {
  //   const user: User = {
  //     username: this.form.username,
  //     passwd: this.form.password,
  //     first_name: '',
  //     last_name: '',
  //     email_address: '',
  //     phone: '',
  //     roles:[]
  //   };
  
  //   this.authService.login(user.username, user.passwd).subscribe({
  //     next: (data: { token: string }) => {
  //       if (data.token) {
  //         console.log(`Hi ${user.username}, you are now logged in.`);
  //         this.authService.setLoggedIn(true);
  //       }
  //     },
  //     error: (err: any) => {
  //       console.log(`Error: ${err.error.message}`);
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //     }
  //   });    
  // }

