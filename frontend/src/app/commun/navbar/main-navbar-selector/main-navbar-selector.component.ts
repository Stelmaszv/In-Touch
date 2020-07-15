import { Component} from '@angular/core';
import {Auth_Service} from 'src/app/service/auth/auth.service'

@Component({
  selector: 'app-main-navbar-selector',
  templateUrl: './main-navbar-selector.component.html',
  styleUrls: ['./main-navbar-selector.component.scss']
})
export class MainNavbarSelectorComponent{
  public constructor(private Auth:Auth_Service) { }
  public If_Auth(){
    return this.Auth.If_Auth()
  }
}
