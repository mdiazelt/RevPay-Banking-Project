import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { User } from '../models/user.model';

const AUTH_API = "http://localhost:9000/";
@Injectable({
  providedIn: 'root'
})
export class BusinessAddCreditCardService {

  constructor(private http: HttpClient) { }


  postCreditCard(card: Card): Observable<any> {
    const userId = localStorage.getItem('userId');
    const url = `${AUTH_API}addCard/${userId}`
    //const url = `${AUTH_API}addCard`;
    const authToken = localStorage.getItem('userId'); 
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    header.append("Authorization", `Bearer ${authToken}`);
    console.log(url);
    return this.http.post<any>(url, card,{ headers: header })

  }
  // getPayment(): Card {
  //   return {
  //     fullName: '',
  //     number: '',
  //     cvc: '',
  //     expiration: ''
  //   }
  // }
}





