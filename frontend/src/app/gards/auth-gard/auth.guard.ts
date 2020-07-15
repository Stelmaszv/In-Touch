import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Auth_Service } from 'src/app/service/auth/auth.service'
import { Router_Custum_Service } from 'src/app/service/Router-Custum/router-custum.service'

@Injectable({
  providedIn: 'root'
})
export class Auth_Guard implements CanActivate {
  public constructor(private Auth_Service:Auth_Service,private router: Router_Custum_Service){}
  public canActivate() : boolean 
  {
    if (!this.Auth_Service.If_Auth()){
      this.router.navigate('Login');
      return false
    }
    return true
  }
}
