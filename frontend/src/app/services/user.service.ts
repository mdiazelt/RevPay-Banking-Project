import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:9000/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPersonalAccount(): Observable<any>{
    return this.http.get(API_URL + 'personal', {responseType:'text'});
  }
}
