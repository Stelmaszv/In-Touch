import { Component, ElementRef} from '@angular/core';
import {environment} from '../../../environments/environment'
import { TranslateService} from '@ngx-translate/core'
@Component({
  selector: 'app-regulations',
  templateUrl: './regulations.component.html',
  styleUrls: ['./regulations.component.scss']
})

export class RegulationsComponent {
  public environment=environment
  private langsClass=[]
  constructor(private elementRef:ElementRef,private translate:TranslateService) {}
  public ifChused(index) :boolean
  {
    return (index.name==this.environment.language.use);
  }
  public ngAfterViewInit() {
    let obj=this
    this.elementRef.nativeElement.querySelectorAll('.lang').forEach( function ( item ) {
      item.addEventListener('click', function(event) {
          obj.onClick(item)
      });
    });
  }
  public onClick(item) {
    this.translate.use(item.data)
    this.translate.setDefaultLang(item.data)
  }

}
