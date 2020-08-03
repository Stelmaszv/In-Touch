import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TimeService {
  
  public getData(){
    return 2020
  }

  public ifDataPassed(data: string) : boolean
  {
    return (Date.now()>this.setDataTime(data)) ? true : false
  }

  private setDataTime(data: string) :number
  {
    var theBigDay = new Date(data);
    var sameAsBigDay = new Date();
    return sameAsBigDay.setTime(theBigDay.getTime());
  }
}
