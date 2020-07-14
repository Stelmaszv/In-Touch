import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth_Service {
  public if_auth() : boolean 
  {
      return false;
  }
}
