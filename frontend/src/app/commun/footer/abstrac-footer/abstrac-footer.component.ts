import { Component} from '@angular/core';
import {RouterCustumService} from  '../../../service/Router-Custum/router-custum.service'
import {TimeService} from '../../../service/time/time.service'
import {environment} from '../../../../environments/environment'
import {TranslateMenagerService} from '../../../service/translateMenager/translate-menager.service'

@Component({
  selector: 'app-abstrac-footer',
  templateUrl: './abstrac-footer.component.html',
  styleUrls: ['./abstrac-footer.component.scss']
})
export class AbstracFooterComponent{
  public environment;
  constructor(public Router:RouterCustumService,private Time:TimeService,private translate:TranslateMenagerService) { 
    this.environment=environment
    this.setLang()
  }
  public getTime(){
    return this.Time.getData();
  }
  protected setLang(){
    this.translate.setLang()
  }
}
