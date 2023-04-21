import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  user: User = {username:'',passwd:'',email_address:'',phone:'',first_name:'',last_name:''}

  setLoggedIn(value:boolean){
    this.loggedInStatus = value
    localStorage.setItem('loggedIn', 'true')
  }
  get IsLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn')||this.loggedInStatus.toString())
  }
}
