import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';


const AUTH_API = "/api"
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'auth_token';
  loggedIn: boolean = false;


  user: User = {
    username: "", passwd: "",
    id: 0,
    balance: 0,
    email: '',
    phone: '',
    role: '',
    first_name: '',
    last_name: ''
  }
  constructor(private http: HttpClient, private router: Router) { 

  }
  accInfo: any
  login(user: User): Observable<any> {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post(AUTH_API + 'login', user, { headers: header }).pipe(
      tap((loginUser: any) => {
        // Check if the role matches the selected role
        if (loginUser.hasOwnProperty('role') && loginUser.role !== user.role) {
          throw new Error(`You are not logged in as a ${user.role} account.`);
        }
        this.accInfo = loginUser;
        localStorage.setItem(this.tokenKey, JSON.stringify(loginUser));
        this.loggedIn = true;
        if (loginUser.hasOwnProperty('role') && loginUser.role === 'personal') {
          this.router.navigate(['/personal'], { queryParams: { role: loginUser.role } });
        } else if (loginUser.hasOwnProperty('role') && loginUser.role === 'business') {
          this.router.navigate(['/business'], { queryParams: { role: loginUser.role } });
        }
      }),
      catchError(() => {
        return throwError(() => new Error('username or password is incorrect'));
      })
    );
  }
}

