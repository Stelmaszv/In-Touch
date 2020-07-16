import { Component} from '@angular/core';
import {Router_Custum_Service} from  '../../../service/Router-Custum/router-custum.service'
import {TimeService} from '../../../service/time/time.service'
import {environment} from '../../../../environments/environment'
import { TranslateService} from '@ngx-translate/core'
@Component({
  selector: 'app-abstrac-footer',
  templateUrl: './abstrac-footer.component.html',
  styleUrls: ['./abstrac-footer.component.scss']
})
export class AbstracFooterComponent{
  public environment;
  constructor(public Router:Router_Custum_Service,private Time:TimeService,private translate:TranslateService) { 
    this.environment=environment
    this.setLang()
  }
  public getTime(){
    return this.Time.getData();
  }
  protected setLang(){
    this.translate.addLangs(environment.language.langs)
    this.translate.setDefaultLang(environment.language.defult)
    this.translate.use(localStorage.getItem('lang'))
  }
}
