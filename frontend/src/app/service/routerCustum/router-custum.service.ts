import { Injectable } from '@angular/core';
import {Ruter_Data} from 'src/app/app-routing.module'
import { Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RouterCustumService {

  private routs=[];

  public constructor(private router: Router){
    this.routs=Ruter_Data[0]
  }
  
  public Navigate(name:string) 
  {
      return this.router.navigate([this.Faind_Rout(name)]);
  }

  public Get_Rout(name:string) :string
  {
      return this.Faind_Rout(name)
  }

  private Faind_Rout(name:string) :string
  {
      let found=false
      let url:string

      for(let item of this.routs){
          if (name === item.data.Route_Name){
            found=true
            url = item.path
          }
      }
      
      if (found){return url='/'+url}

      try {
        throw new Error('Rout with name '+name+' not found');
      } catch (e){
        console.log(e)
      }
    
  }
}
