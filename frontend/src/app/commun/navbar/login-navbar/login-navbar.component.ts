import { Component} from '@angular/core';
import {Router_Custum_Service} from 'src/app/service/Router-Custum/router-custum.service'
import {environment} from 'src/environments/environment'
@Component({
  selector: 'app-login-navbar',
  templateUrl: './login-navbar.component.html',
  styleUrls: ['./login-navbar.component.scss']
})
export class LoginNavbarComponent{
  public envarioment;
  constructor(public router:Router_Custum_Service) {
    this.envarioment=environment
  }

}
