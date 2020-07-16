import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service'
import { RouterCustumService } from 'src/app/service/Router-Custum/router-custum.service'

@Injectable({
  providedIn: 'root'
})
export class Auth_Guard implements CanActivate {
  public constructor(private Auth_Service:AuthService,private router: RouterCustumService){}
  public canActivate() : boolean 
  {
    return  (this.Auth_Service.ifAuth()) ? false : true
  }
}
