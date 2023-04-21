import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "http://localhost:9000"
  private tokenKey = 'auth_token';
  private loggedIn: boolean = false;
  
  constructor(private http: HttpClient, private router: Router) { }

  loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  user: User = { username: '', passwd: '', email_address: '', phone: '', first_name: '', last_name: '',roles:[] }

  login(username: string, password: string): Observable<{ token: string, userType: string }> {
    return this.http.post<{ token: string, userType: string }>(`${this.apiUrl}/login`, { username, password });
  }

  onLogin(username: string, password: string): void {
    this.login(username, password).subscribe({
      next: (response) => {
        this.setToken(response.token);
        this.setLoggedIn(true);
        /**
         * TODO 
         * Navigate to the appropriate page based on the user type
         */
        // if (response.userType === 'personal') {
        //   this.router.navigate(['/personal']);
        // } else if (response.userType === 'business') {
        //   this.router.navigate(['/business']);
        // }
      },
      error: (error) => {
        console.log(error);
        this.handleLoginError(error); // call the error handler method
      }
    });
  }

  handleLoginError(error: any): void {
    // handle the error
    if (error.status === 401) {
      console.log('Invalid username or password');
      // show an error message
    } else if (error.status === 500) {
      console.log('Server error. Please try again later');
      // show an error message 
    } else {
      console.log('Unknown error. Please try again later');
      // show an error message
    }
  }
    //  getting the roles which would either be business or personal
  getRoles(): string[] {
    const user = JSON.parse(localStorage.getItem('user') || '{}') as User;
    return user.roles || [];
  }
  //loginstatus 
  getIsLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString())
  }

  //this is used for the authentication token for the login 
  getToken(): string {
    const token = localStorage.getItem(this.tokenKey);
    return token ? token : '';
  }

    //token for hte browswer
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  //removes the token from the browser
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  //boolean that tells if you are logged in or not 
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  //set the login if you are logged or not 
  setLoggedIn(loggedIn: boolean): void {
    this.loggedIn = loggedIn;
  }

}
