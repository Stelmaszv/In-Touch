import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  public getData(){
    return 2020
  }
  public ifDataPassed(data) : boolean
  {
    return true
  }
}
