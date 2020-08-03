import { Injectable } from '@angular/core';
import { TimeService } from '../time/time.service'
import { EmailValidService } from '../validator/email-valid.service'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private Time:TimeService,private EmailValid:EmailValidService ) { }

  public ifDataPassedRegister(data) : boolean{
    return this.Time.ifDataPassed(data);
  }
  
  public checkAge(){
    
  }

  public emailValid(email){
    return this.EmailValid.validate(email)
  }

  public getEmialErrorSection(){
    return this.EmailValid.getErros()
  }

}
