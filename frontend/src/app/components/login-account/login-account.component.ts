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
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

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
  onSubmit(): void {
    const { username, password } = this.form;
  this.authService.onLogin(username, password);
  }
}
