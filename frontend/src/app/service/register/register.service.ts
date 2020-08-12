import { Injectable } from '@angular/core';
import { EmailValidService } from '../validator/email-valid.service'
import { HttpClient} from '@angular/common/http';
import { registerModel } from '../../model/registerModel';
import { Observable } from 'rxjs';

const options = {
  headers: { 'Content-Type': ['application/json'] }
};

@Injectable({
  providedIn: 'root'
})

export class RegisterService {  

  registerUrl='http://127.0.0.1:8000/account/register/'

  constructor(private EmailValid:EmailValidService,private http:HttpClient) { }

  public getEmialErrorSection(){
    return this.EmailValid.getErros()
  }

  public register(data)  :Observable<registerModel[]> {
    return this.http.post<registerModel[]>(this.registerUrl,data,options) 
  }

}
