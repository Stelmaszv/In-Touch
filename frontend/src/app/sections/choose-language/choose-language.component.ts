import { Component, ElementRef,AfterViewInit } from '@angular/core';
import {environment} from '../../../environments/environment'
import {TranslateMenagerService} from '../../service/translateMenager/translate-menager.service'
@Component({
  selector: 'app-choose-language',
  templateUrl: './choose-language.component.html',
  styleUrls: ['./choose-language.component.scss']
})
export class ChooseLanguageComponent  implements AfterViewInit{

  public environment=environment
  constructor(private elementRef:ElementRef,private translate:TranslateMenagerService ) {}
  public ifChused(index) :boolean
  {
    return (index.name==localStorage.getItem('lang'));
  }
  public ngAfterViewInit() :void 
  {
    let obj=this
    this.elementRef.nativeElement.querySelectorAll('.lang').forEach( function ( item ) {
      item.addEventListener('click', function(event) {
          obj.onClick(item)
      });
    });
  }
  public onClick(item) :void
  {
    this.translate.changeLang(item.data)
    window.location.href=''
  }
}

