import { Component} from '@angular/core';
import {Auth_Service} from 'src/app/service/auth/auth.service';
@Component({
  selector: 'app-abstract-selctor',
  templateUrl: './abstract-selctor.component.html',
  styleUrls: ['./abstract-selctor.component.scss']
})
export class AbstractSelctorComponent{
  public constructor(private Auth:Auth_Service) {  }
  public If_Auth(){
    return this.Auth.If_Auth()
  }

}
