import { Component} from '@angular/core';
import {Auth_Service} from 'src/app/service/auth/auth.service';
import { TranslateService} from '@ngx-translate/core'
import {environment} from 'src/environments/environment'
@Component({
  selector: 'app-abstract-selctor',
  templateUrl: './abstract-selctor.component.html',
  styleUrls: ['./abstract-selctor.component.scss']
})
export class AbstractSelctorComponent{
  public constructor(private Auth:Auth_Service,private translate:TranslateService) {  }
  protected setLang(){
    this.translate.addLangs(environment.language.langs)
    this.translate.setDefaultLang(environment.language.defult)
    this.translate.use(environment.language.defult)
  }
  public If_Auth(){
    return this.Auth.If_Auth()
  }

}
