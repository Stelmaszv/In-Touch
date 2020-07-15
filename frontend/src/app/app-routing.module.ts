import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './sections/login/login.component';
import { RegisterComponent } from './sections/register/register.component';
import { MainPageComponent } from './sections/main-page/main-page.component';
import { ChooseLanguageComponent } from './sections/choose-language/choose-language.component';
import { RegulationsComponent } from './sections/regulations/regulations.component';
import {Auth_Guard} from 'src/app/gards/auth-gard/auth.guard'
const routes: Routes = [
    { 
      path:'' , 
      component:MainPageComponent,
      canActivate:[Auth_Guard],
      data: {Route_Name: "Main Page"}
    },
    { 
      path:'login' , 
      component:LoginComponent,
      data: {Route_Name: "Login"}
    },
    { 
      path:'register' , 
      component:RegisterComponent,
      data: {Route_Name: "Register"}
    },
    {
      path:'chooseLanguage' , 
      component:ChooseLanguageComponent,
      data: {Route_Name: "chooseLanguage"}
    },
    {
      path:'regulations' , 
      component:RegulationsComponent,
      data: {Route_Name: "regulations"}
    }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  LoginComponent,
  RegisterComponent,
  ChooseLanguageComponent,
  RegulationsComponent
]
export const Ruter_Data = [
  routes
]
