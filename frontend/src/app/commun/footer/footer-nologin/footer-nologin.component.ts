import { Component} from '@angular/core';
import { Router_Custum_Service } from 'src/app/service/Router-Custum/router-custum.service'
import {environment} from '../../../../environments/environment'
import {TimeService} from 'src/app/service/time/time.service'
@Component({
  selector: 'app-footer-nologin',
  templateUrl: './footer-nologin.component.html',
  styleUrls: ['./footer-nologin.component.scss']
})
export class FooterNologinComponent{
  public environment
  constructor(public Router:Router_Custum_Service,private Time:TimeService) { 
    this.environment=environment
  }
  public getTime(){
    return this.Time.getData();
  }
}
