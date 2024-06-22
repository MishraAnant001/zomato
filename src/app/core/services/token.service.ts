import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(){
    return localStorage.getItem("token") || sessionStorage.getItem("token")
  }
  setToken(token:string,remember:boolean){
    if(remember){
      
      localStorage.setItem("token",token)
    }else{
      sessionStorage.setItem("token",token)
    }
  }
  setRole(role:string){
    localStorage.setItem("role",role)
  }
  getRole(){
    return localStorage.getItem("role")
  }
  setName(name:string){
    localStorage.setItem("name",name)
  }
  getName(){
    return localStorage.getItem("name")
  }
  clearStorage(){
    localStorage.clear()
    sessionStorage.clear()
  }

}
