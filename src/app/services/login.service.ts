import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from 'src/app/common/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "http://localhost:8080/ers/auth/login"

  constructor(private http: HttpClient) { }

  fetchUser(user): Observable<User>{
    return this.http.post<User>(this.baseUrl, user, {withCredentials: true});
  }

  getUser(){
    return JSON.parse(sessionStorage.getItem("user"));
  }

  setUser(user){
    sessionStorage.setItem("user", JSON.stringify(user));
  }


}
