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

  constructor(private http : HttpClient) { }

  postTrans(transactions : Transactions, user : User):Observable<Transactions>{
    const url = `${AUTH_API}send?from=${user.id}&to=${user.id}`;
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin","*");
    return this.http.post<Transactions>(url, transactions, {headers: header})
  }
}
