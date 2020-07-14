import { Injectable } from '@angular/core';
import {Ruter_Data} from 'src/app/app-routing.module'
import { Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class Router_Custum_Service {

  private routs=[];

  public constructor(private router: Router){
    this.routs=Ruter_Data[0]
  }
  
  public navigate(name:string) :void
  {
      let url=this.faind_rout(name);
      url='/'+url
      this.router.navigate([url]);
  }

  private faind_rout(name:string) :string
  {
      let found=false
      let url:string

      for(let item of this.routs){
          if (name === item.data.Route_Name){
            found=true
            url = item.path
          }
      }

      if (found){return url}

      try {
        throw new Error('Rout with name '+name+' not found');
      } catch (e){
        console.log(e)
      }
    
  }
}
