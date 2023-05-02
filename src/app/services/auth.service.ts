import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string ="https://localhost:7064/api/User/"
  constructor(private http : HttpClient) { }

  signUp(userObj:User)
  {
    return this.http.post<any>(`${this.baseUrl}register`,userObj);
  }
  login(loginObj: User)
  {
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj);

  }


}
