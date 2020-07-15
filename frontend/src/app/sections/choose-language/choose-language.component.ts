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
    return (index.name==this.environment.language.use);
  }
  public ngAfterViewInit() {
    this.elementRef.nativeElement.querySelectorAll('.langList').addEventListener('click', this.onClick.bind(this));
  }
  public onClick(event) {
    console.log(event);
  }
}

