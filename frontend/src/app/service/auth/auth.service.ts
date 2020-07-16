import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public ifAuth() : boolean 
  {
    return (this.getUser()) ? true : false
  }
  public getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }
  public createUser(data){
    localStorage.setItem('user',data)
  }
  public logOut(){
    localStorage.removeItem('user')
  }
}
