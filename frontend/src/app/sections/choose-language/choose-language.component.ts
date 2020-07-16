import { Component, ElementRef,AfterViewInit } from '@angular/core';
import {environment} from '../../../environments/environment'
@Component({
  selector: 'app-choose-language',
  templateUrl: './choose-language.component.html',
  styleUrls: ['./choose-language.component.scss']
})
export class ChooseLanguageComponent  implements AfterViewInit{

  public environment=environment
  constructor(private elementRef:ElementRef) {}
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
    localStorage.setItem('lang',item.data);
    window.location.href=''
  }
}

