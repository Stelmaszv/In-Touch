import { Injectable } from '@angular/core';
import { banedEmails } from 'src/app/service/validator/baned'
@Injectable({
  providedIn: 'root'
})
export class EmailValidService {
  constructor() { }
  private lenghtLimit=3
  private erros={
    'isInvalid':false,
    'isBanned':false,
    'isNotavailable':false
  };
  public getErros(){
    return this.erros
  }
  public validate(email:string)
  {
    if(this.ifEmailIsValid(email)){
      this.erros.isInvalid=false
      if(this.isNotBanned(email)){
        this.erros.isBanned=false
        if(!this.isAvailable){
          this.erros.isNotavailable=true
        }else{
          this.erros.isNotavailable=false
        }
      }else{
        this.erros.isBanned=true
      }
    }else{
      this.erros.isInvalid=true
    }
    return this.erros
  }
  private isAvailable(email): boolean{
    return (email=="test@123.pl") ? true : false;
  }
  private isNotBanned(email:string) : boolean
  {
    let found=false
    banedEmails.forEach(element => {
        if(email!=element){
          found=true
        }
    });
    return found
  }
  private ifEmailIsValid(email:string) : boolean
  {
    if (email.length > this.lenghtLimit){
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
}
