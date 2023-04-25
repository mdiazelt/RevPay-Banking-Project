import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const AUTH_API = "http://localhost:9000/";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { }

  registerPersonal(user : User):Observable<User>{
    const url = `${AUTH_API}personal/register`;
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin","*");
    // return this.http.post<User>("http://127.0.0.1:9000/personal/regsiter", user, { headers:header })
    return this.http.post<User>(url, user, {headers: header})
  }

  
  registerBusiness(user : User):Observable<User>{
    const url = `${AUTH_API}business/register`;
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin","*");
    // return this.http.post<User>("http://127.0.0.1:9000/business/register", user, { headers:header })
    return this.http.post<User>(url, user, {headers: header})
  }
}
