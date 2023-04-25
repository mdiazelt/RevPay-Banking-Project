import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http : HttpClient) { }

  addCard(card : Card):Observable<Card>{
    const API_URL = "http://127.0.0.1:9000";
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin","*");
    return this.http.post<Card>(API_URL + '/addCard', card, {headers: header})
  }
}
