import { Component} from '@angular/core';
import { TranslateService} from '@ngx-translate/core'
@Component({
  selector: 'app-main-footer-selctor',
  templateUrl: './main-footer-selctor.component.html',
  styleUrls: ['./main-footer-selctor.component.scss']
})
export class MainFooterSelctorComponent {

  constructor(public translate:TranslateService) {
    translate.addLangs(['en'])
    translate.setDefaultLang('en')
    translate.use('en')
  }

}
