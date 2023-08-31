import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/FlightBooking.com";

  constructor(private httpClient: HttpClient) {}

  signup(user:User):Observable<any>
  {
     const headers={'content-type':'application/json'};
     const body=JSON.stringify(user);
     return this.httpClient.post(`${this.baseURL}/signup`,body,{'headers':headers});
  }
  isUserLoggedIn() {
    let status = sessionStorage.getItem('loginStatus')
    console.log(status === null)
    return !(status === null)
  }
  logOut() {
    sessionStorage.removeItem('loginStatus')
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('userRole')
    sessionStorage.removeItem('userName')
  }
}
