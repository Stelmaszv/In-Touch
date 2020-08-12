import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { banedEmails } from 'src/app/service/validator/baned'
import {emailModel} from '../../model/emailAvailable'


const options = {
  headers: { 'Content-Type': ['application/json'] }
};

@Injectable({
  providedIn: 'root'
})
export class EmailValidService {
  
  emailAvailableUrl = 'http://127.0.0.1:8000/account/emailAvailable/'

  private lenghtLimit=3

  private erros={
    'isInvalid':false,
    'isBanned':false,
    'isNotavailable':false
  };

  constructor(private http:HttpClient) { }

  public getErros(){
    return this.erros
  }

  public isAvailable(email){
    return this.http.get<emailModel[]>(this.emailAvailableUrl+email+'/',options)
  }

  public isNotBanned(email:string) : boolean
  {
    let found=false
    banedEmails.forEach(element => {
        if(email!=element){
          found=true
        }
    });
    return found
  }
}
