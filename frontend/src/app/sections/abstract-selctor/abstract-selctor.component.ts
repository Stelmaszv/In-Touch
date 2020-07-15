import { Component} from '@angular/core';
import {Auth_Service} from 'src/app/service/auth/auth.service';
import { TranslateService} from '@ngx-translate/core'
@Component({
  selector: 'app-abstract-selctor',
  templateUrl: './abstract-selctor.component.html',
  styleUrls: ['./abstract-selctor.component.scss']
})
export class AbstractSelctorComponent{
  protected constructor(private Auth:Auth_Service,private translate:TranslateService) {  }
  protected setLang(){
    this.translate.addLangs(['en'])
    this.translate.setDefaultLang('en')
    this.translate.use('en')
  }
  public If_Auth(){
    return this.Auth.If_Auth()
  }

}
