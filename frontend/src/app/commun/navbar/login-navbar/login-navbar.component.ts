import { Component} from '@angular/core';
import {RouterCustumService} from 'src/app/service/routerCustum/router-custum.service'
import {environment} from 'src/environments/environment'
@Component({
  selector: 'app-login-navbar',
  templateUrl: './login-navbar.component.html',
  styleUrls: ['./login-navbar.component.scss']
})
export class LoginNavbarComponent{
  public envarioment;
  constructor(public router:RouterCustumService) {
    this.envarioment=environment
  }

}
