import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service'
import { RouterCustumService } from 'src/app/service/routerCustum/router-custum.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public constructor(private AuthService:AuthService,private router: RouterCustumService){}
  public canActivate() : boolean 
  {
    if (!this.AuthService.ifAuth()){
        this.router.Navigate('Login')
        return false
    }
    return  true
  }
}
