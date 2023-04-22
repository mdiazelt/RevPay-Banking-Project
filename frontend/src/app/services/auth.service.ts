import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';


const AUTH_API = "http://localhost:9000/"
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private tokenKey = 'auth_token';
   loggedIn: boolean = false;
  //isLoggedIn = false;
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
  constructor(private http: HttpClient, private router: Router) { }
  accInfo: any
  login(user: User): Observable<any> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post(AUTH_API + 'login', user, {headers: header}
    );
  }
  logout(): Observable<any> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");    
    return this.http.post(AUTH_API + 'logout', {}, {headers: header});
  }


  // login(username: string, password: string): Observable<LoginUser> {
  //   const headers = new HttpHeaders()
  //     .set('Content-Type', 'application/json')
  //     .set('Access-Control-Allow-Origin', '*');

  //   return this.http.post<LoginUser>(`${this.apiUrl}/login`, { username, password }, { headers })
  //     .pipe(
  //       tap(loginUser => {
  //         localStorage.setItem(this.tokenKey, loginUser.secureToken.toString());
  //         console.log('Login user:', loginUser);
  //       }),
  //       catchError(error => {
  //         console.error(error);
  //         return throwError(() => new Error('error'));
  //       })
  //     );
  // }

}

//   loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
//   user: User = { username: '', passwd: '', email_address: '', phone: '', first_name: '', last_name: '',roles:[] }

//   login(username: string, password: string): Observable<{ token: string, userType: string }> {
//     return this.http.post<{ token: string, userType: string }>(`${this.apiUrl}/login`, { username, password });
//   }

//   onLogin(username: string, password: string): void {
//     this.login(username, password).subscribe({
//       next: (response) => {
//         this.setToken(response.token);
//         this.setLoggedIn(true);
//         /**
//          * TODO 
//          * Navigate to the appropriate page based on the user type
//          */
//         // if (response.userType === 'personal') {
//         //   this.router.navigate(['/personal']);
//         // } else if (response.userType === 'business') {
//         //   this.router.navigate(['/business']);
//         // }
//       },
//       error: (error) => {
//         console.log(error);
//         this.handleLoginError(error); // call the error handler method
//       }
//     });
//   }

//   handleLoginError(error: any): void {
//     // handle the error
//     if (error.status === 401) {
//       console.log('Invalid username or password');
//       // show an error message
//     } else if (error.status === 500) {
//       console.log('Server error. Please try again later');
//       // show an error message 
//     } else {
//       console.log('Unknown error. Please try again later');
//       // show an error message
//     }
//   }
//     //  getting the roles which would either be business or personal
//   getRoles(): string[] {
//     const user = JSON.parse(localStorage.getItem('user') || '{}') as User;
//     return user.roles || [];
//   }
//   //loginstatus 
//   getIsLoggedIn() {
//     return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString())
//   }

//   //this is used for the authentication token for the login 
//   getToken(): string {
//     const token = localStorage.getItem(this.tokenKey);
//     return token ? token : '';
//   }

//     //token for hte browswer
//   setToken(token: string): void {
//     localStorage.setItem(this.tokenKey, token);
//   }

//   //removes the token from the browser
//   removeToken(): void {
//     localStorage.removeItem(this.tokenKey);
//   }

//   //boolean that tells if you are logged in or not 
//   isLoggedIn(): boolean {
//     return this.loggedIn;
//   }
//   //set the login if you are logged or not 
//   setLoggedIn(loggedIn: boolean): void {
//     this.loggedIn = loggedIn;
//   }

// }
