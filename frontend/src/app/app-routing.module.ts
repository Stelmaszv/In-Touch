import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './sections/login/login.component';
import { RegisterComponent } from './sections/register/register.component';

const routes: Routes = [
    { 
      path:'login' , 
      component:LoginComponent
    },
    { 
      path:'register' , 
      component:RegisterComponent
    }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  LoginComponent,
  RegisterComponent
]
