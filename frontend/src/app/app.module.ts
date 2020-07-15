import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Commom_Components } from './commun/commom';
import { HttpClient  } from '@angular/common/http';
import { TranslateModule , TranslateLoader} from '@ngx-translate/core'
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LoginNavbarComponent } from './commun/navbar/login-navbar/login-navbar.component';
import { MainNavbarComponent } from './commun/navbar/main-navbar/main-navbar.component';
import { AbstractSelctorComponent } from './sections/abstract-selctor/abstract-selctor.component';
import { FooterNologinComponent } from './commun/footer/footer-nologin/footer-nologin.component';
import { FooterMianComponent } from './commun/footer/footer-mian/footer-mian.component';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    Commom_Components,
    LoginNavbarComponent,
    MainNavbarComponent,
    AbstractSelctorComponent,
    FooterNologinComponent,
    FooterMianComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
