import {Component,OnInit, ElementRef,AfterViewInit} from '@angular/core';
import {RegisterService} from 'src/app/service/register/register.service'
import {PasswordValidService} from 'src/app/service/password/password-valid.service'
import {FormControl, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import {dataPassed} from 'src/app/validator/register/registerValid'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit,AfterViewInit{
  public emailSection;
  public constructor(
    private RegisterService:RegisterService,
    private elementRef:ElementRef,
    private PasswordValid:PasswordValidService
  ){}
  public register = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    birthday: new FormControl('',[
      Validators.required,
      dataPassed()
    ]),
    password: new FormControl('',[
      Validators.required
    ]),
    passwordRepeat: new FormControl('',[
      Validators.required
    ]),
    sex: new FormControl('',[
      Validators.required
    ]),
    regulations: new FormControl('',[
      Validators.required
    ]),
  });
  public onSubmit()
  {
      if (this.register.valid){
        alert('ok')
      }else{
        console.log(this.register.errors)
      }
  }
  public ngOnInit() :void
  {
    this.emailSection=this.RegisterService.getEmialErrorSection()
  }

  public ngAfterViewInit() :void 
  {
    this.passwordValid();
    this.emailEvants();
    this.birthdayEvants();
    this.repeatPassword();
  }

  private repeatPassword() :void
  {
    let obj=this
    let elementRef = this.elementRef
    let elementRefRepeatPassword = this.elementRef.nativeElement.querySelector('.Password-repeat')
    elementRefRepeatPassword.addEventListener('focusout', function() {
      matchPasswords(this.value)
    });
    function matchPasswords(value){
        let password = elementRef.nativeElement.querySelector('.password')
        if(value!=password.value){
          elementRefRepeatPassword.classList.add('is-invalid')
          obj.showErrorsList(elementRefRepeatPassword,elementRef,'.PasswordRepeatValid')
          password.classList.add('is-invalid')
        }
    }
  }

  private passwordValid() :void
  {
    let obj=this
    let elementRef = this.elementRef
    let elementRefPassword = this.elementRef.nativeElement.querySelector('.password')
    elementRefPassword.addEventListener('keyup', function() {
      moveIn(elementRefPassword)
      posswordStrenght(this.value)
      obj.showErrorsList(elementRefPassword,elementRef,'.passwordValidErrors')
    });
    elementRefPassword.addEventListener('focusout', function() {
      moveOut(elementRefPassword)
    });
    function posswordStrenght(value:string){
      let progresBarStatus= elementRef.nativeElement.querySelector('.progress-bar')
      progresBarStatus.style.width=obj.PasswordValid.validate(value)+"%"
      setPasswordStyle(progresBarStatus,obj.PasswordValid.validate(value));
    }
    function setPasswordStyle(progresBarStatus,procent:number){
        let className='bg-danger'
        elementRefPassword.classList.remove("is-valid")
        elementRefPassword.classList.remove("is-invalid")
        elementRefPassword.classList.add("is-invalid")

        if(procent>50){
          elementRefPassword.classList.remove("is-invalid")
          className='bg-warning'
        }

        if(procent>75){
          elementRefPassword.classList.remove("is-invalid")
          elementRefPassword.classList.add("is-valid")
          className='bg-success'
        }
        
        progresBarStatus.classList.remove('bg-danger')
        progresBarStatus.classList.remove('bg-warning')
        progresBarStatus.classList.remove('bg-success')

        progresBarStatus.classList.add(className)
    }
    function moveIn(eR){
      progresSwich('visible')
      eR.style.borderRadius='0px 0px 10px 10px'
    }
    function moveOut(eR){
      if (!elementRefPassword.classList.contains('is-invalid')){
        progresSwich('hidden')
        eR.style.borderRadius='10px'
      }
    }
    function progresSwich(swich:string){
      let progressBar = elementRef.nativeElement.querySelector('.progress')
      progressBar.style.visibility= swich
    }
  }

  private birthdayEvants() :void 
  {
    let obj=this
    let elementRef=this.elementRef
    let elementRefBirthday = this.elementRef.nativeElement.querySelector('.birthday')
    elementRefBirthday.addEventListener('focusout', function() {
      console.log(obj.register.controls.birthday.errors)
      obj.addClassEmailValid(obj.register.controls.birthday.errors,elementRefBirthday)
      obj.showErrorsList(elementRefBirthday,elementRef,'.birthdayValidErrors')
    })  
    /*
    let obj=this
    let elementRef=this.elementRef
    let elementRefBirthday = this.elementRef.nativeElement.querySelector('.birthday')
    elementRefBirthday.addEventListener('focusout', function() {
      
      elementRefBirthday.classList.add("is-invalid")
      if(obj.RegisterService.ifDataPassedRegister(this.value)){
        elementRefBirthday.classList.remove("is-invalid")
        elementRefBirthday.classList.add("is-valid")
      }
      obj.showErrorsList(elementRefBirthday,elementRef,'.birthdayValidErrors')
    });
    */
  }
  private emailEvants() :void 
  {
    let obj=this
    let elementRef=this.elementRef
    let elementRefEmail = this.elementRef.nativeElement.querySelector('.email')
    elementRefEmail.addEventListener('keyup', function() {
      obj.addClassEmailValid(obj.register.controls.email.errors,elementRefEmail)
      obj.showErrorsList(elementRefEmail,elementRef,'.emailValidErrors')
    });
  }
  
  private showErrorsList(elementRefID,elementRef,classValid:string) : void
  {
    let el=elementRef.nativeElement.querySelector(classValid)
    let logError=elementRef.nativeElement.querySelector('.input-group-text')
    if(elementRefID.classList.contains('is-invalid')){
      logError.classList.add("invalidErrorsListLogo")
      elementRefID.classList.add("invalidErrorsList")
      el.classList.add("show-Error")
    }else{
      logError.classList.remove("invalidErrorsListLogo")
      elementRefID.classList.remove("invalidErrorsList")
      el.classList.remove("show-Error")
    }
  }

  private addClassEmailValid(formItem :object,el) : void
  {
    console.log(formItem)
    el.classList.add("is-invalid")
    if(!formItem){
      el.classList.remove("is-invalid")
      el.classList.add("is-valid")
    }
  }
}