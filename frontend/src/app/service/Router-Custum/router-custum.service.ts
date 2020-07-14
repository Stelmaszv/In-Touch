import { Injectable } from '@angular/core';
import {Ruter_Data} from 'src/app/app-routing.module'
import { Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class Router_Custum_Service {

  private routs;
  public constructor(private router: Router){
    this.routs=Ruter_Data[0]
  }
  public navigate(name:string)
  {
      let url=this.faind_rout(name);
      url='/'+url
      this.router.navigate([url]);
  }
  private faind_rout(name:string){
      for(let item of this.routs){
          if (name === item.data.Route_Name){
            return item.path
          }
      }
  }
}
