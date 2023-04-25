import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transactions } from '../models/transactions.model';
import { User } from '../models/user.model'; 

const AUTH_API = "http://localhost:9000/";
@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  user: User = {
    id:0,
    username:"",
    passwd:"",
    balance:0,
    email:"",
    first_name:"",
    last_name:"",
    phone:"",
    role:""
  }

  constructor(private http : HttpClient) { }
  header : HttpHeaders = new HttpHeaders();

  postTrans(transactions : Transactions, user : User):Observable<Transactions>{
    const url = `${AUTH_API}send?from=${user.id}&to=${user.id}`;
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin","*");
    return this.http.post<Transactions>(url, transactions, {headers: header})
  }

  findUser(user : User):Observable<any>{
    const url = `${AUTH_API}findAccount?username=${user.username}`;
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin","*");
    return this.http.get(url, {headers: header})
  }
}
