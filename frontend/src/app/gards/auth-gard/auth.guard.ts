import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Auth_Service } from 'src/app/service/auth/auth.service'
import { Router_Custum_Service } from 'src/app/service/Router-Custum/router-custum.service'
import { Router} from '@angular/router';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth_Guard implements CanActivate {
  public constructor(private Auth_Service:Auth_Service,private router: Router_Custum_Service){}
  public canActivate() : boolean 
  {
    if (!this.Auth_Service.if_auth()){
      this.router.navigate('Login');
      return false
    }
    return true
  }
}
