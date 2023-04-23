import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.component.html',
  styleUrls: ['./login-account.component.css']
})
export class LoginAccountComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  username = '';
  password = '';
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
      role: '',
      first_name: '',
      last_name: '',
    }
    this.authService.login(user).subscribe({
      next: (loginUser:any) => {
        console.log(loginUser);
        this.authService.accInfo = loginUser;
        this.authService.loggedIn = true;
        this.router.navigate(['/']);
      },
      error: (error) => {
        if (error.status === 401) {
          this.errorMessage = "Invalid email or password. Please try again."
        }
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

