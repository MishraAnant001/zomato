import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { ILogin, IUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userAPI = "http://localhost:8000/api/v1/users"
  private loginAPI ="http://localhost:8000/api/v1/login"
  private signupAPI ="http://localhost:8000/api/v1/signup"
  constructor(
    private http:HttpClient
  ) { }

  signupUser(data:IUser){
    // console.log(data);
    return this.http.post(this.signupAPI,data,{observe:'response'})
  }
  loginUser({email,password}:ILogin){
    console.log({email,password});
    return this.http.post(this.loginAPI,{email,password},{observe:'response'})
  }
}
