import { Injectable } from '@angular/core';
import { TranslateService} from '@ngx-translate/core'
import {environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class TranslateMenagerService {

  constructor(private translate:TranslateService) { }
  public setLang(){
    this.translate.addLangs(environment.language.langs)
    this.translate.setDefaultLang(environment.language.defult)
    this.translate.use(this.getLang())
  }
  public changeLang(data){
    localStorage.setItem('lang',data);
  }
  private getLang(){
    return (localStorage.getItem('lang')) ? localStorage.getItem('lang') : environment.language.defult;
  }
}
