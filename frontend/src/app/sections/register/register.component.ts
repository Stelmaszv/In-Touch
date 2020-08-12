import {Component,OnInit, ElementRef, AfterViewInit} from '@angular/core';
import {RegisterService} from 'src/app/service/register/register.service'
import {PasswordValidService} from 'src/app/service/password/password-valid.service'
import {FormControl, FormGroup} from '@angular/forms';
import {Validators } from '@angular/forms';
import {dataPassed} from 'src/app/validator/register/dataPassed'
import {posswordStrenght} from 'src/app/validator/register/posswordStrenght'
import {passwordMatch} from 'src/app/validator/register/posswordMatch'
import { Router } from '@angular/router';

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
    private PasswordValid:PasswordValidService,
    private router: Router
  ){}
  public register = new FormGroup({
    email: new FormControl('stelmaszv@gmail.com',[
      Validators.required,
      Validators.email
    ]),
    birthday: new FormControl('2020-06-05T15:00',[
      Validators.required,
      dataPassed()
    ]),
    password: new FormControl('Saf!eeqe$1',[
      Validators.required,
      posswordStrenght(),
      passwordMatch('passwordRepeat')
    ]),
    passwordRepeat: new FormControl('Saf!eeqe$1',[
      Validators.required,
      passwordMatch('password')
    ]),
    sex: new FormControl('male',[
      Validators.required
    ]),
    regulations: new FormControl(true,[
      Validators.required
    ]),
  });

  public onSubmit()
  {
      if (this.register.valid){
         if(this.regulationsTrue()){
           this.registerStart()
         }else{
           this.regulationSwich()
         }
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
    this.sexEvant();
    this.regulationsEvants();
  }
  
  private registerStart(): void
  {

    let data = setData(this.register.value) 
    this.RegisterService.register(data).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (er)=>{ 
          console.log(er)
      }
    );

    function setData(data){
        return {
          "email": data.email,
          "password": data.password,
          "sex": data.male,
          "birthday": data.birthday
      }
    }

  }
  

  private regulationsEvants() :void
  {
    let obj=this
    let elementRefRegulations = this.elementRef.nativeElement.querySelector('.regulationsValid')
    elementRefRegulations.addEventListener('change', function() {
        obj.regulationSwich()
    })
  }

  private regulationSwich() :void
  {
    let elementRefRegulations = this.elementRef.nativeElement.querySelector('.regulationsValid')
    if(this.regulationsTrue()){
      elementRefRegulations.classList.remove('is-invalid')
      elementRefRegulations.classList.add('is-valid')
    }else{
      elementRefRegulations.classList.add('is-invalid')
      elementRefRegulations.classList.remove('is-valid')
    }
  }

  private regulationsTrue() :boolean
  {
      if(this.register.controls.regulations.value){
          return true
      }
  }
  
  private sexEvant() :void
  {
    let obj=this
    let elementRef = this.elementRef
    let elementRefSex = this.elementRef.nativeElement.querySelector('.sex')
    elementRefSex.addEventListener('focusout', function() {
        if(!obj.register.controls.sex.value){
          elementRefSex.classList.add('is-invalid')
          obj.showErrorsList(elementRefSex,elementRef,'.SexValid')
        }else{
          elementRefSex.classList.remove('is-invalid')
          elementRefSex.classList.add('is-valid')
        }
        obj.showErrorsList(elementRefSex,elementRef,'.SexValid')
    });
  }

  private repeatPassword() :void
  {
    let obj=this
    let elementRef = this.elementRef
    let elementRefRepeatPassword = this.elementRef.nativeElement.querySelector('.Password-repeat')
    elementRefRepeatPassword.addEventListener('keyup', function() {
      matchPasswords(this.value)
    });
    function matchPasswords(value){
        let password = elementRef.nativeElement.querySelector('.password')
        if(value!=password.value){
          elementRefRepeatPassword.classList.add('is-invalid')
          elementRefRepeatPassword.classList.remove('is-valid')
          switchPassword(password,true)
        }else{
          elementRefRepeatPassword.classList.add('is-valid')
          elementRefRepeatPassword.classList.remove('is-invalid')
          switchPassword(password,false)
        }
        obj.showErrorsList(elementRefRepeatPassword,elementRef,'.PasswordRepeatValid')
        function switchPassword(password,passwordMatch:boolean){
          if(passwordMatch){
            if(password.classList.contains('is-valid')){
                password.classList.remove('is-valid')
                password.classList.add('is-invalid')
            }else{
              password.classList.add('is-invalid')
            }
          }else{
            if(password.classList.contains('is-invalid')){
              password.classList.remove('is-invalid')
              password.classList.add('is-valid')
            }else{
              password.classList.add('is-valid')
            }
          }
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
    function posswordStrenght(value:string) :void
    {
      let progresBarStatus= elementRef.nativeElement.querySelector('.progress-bar')
      progresBarStatus.style.width=obj.PasswordValid.validate(value)+"%"
      setPasswordStyle(progresBarStatus,obj.PasswordValid.validate(value));
    }
    function setPasswordStyle(progresBarStatus,procent:number) :void
    {
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
    function moveIn(eR) :void
    {
      progresSwich('visible')
      eR.style.borderRadius='0px 0px 10px 10px'
    }
    function moveOut(eR) :void
    {
      if (!elementRefPassword.classList.contains('is-invalid')){
        progresSwich('hidden')
        eR.style.borderRadius='10px'
      }
    }
    function progresSwich(swich:string) :void 
    {
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
      obj.addClassEmailValid(obj.register.controls.birthday.errors,elementRefBirthday)
      obj.showErrorsList(elementRefBirthday,elementRef,'.birthdayValidErrors')
    })  
  }
  private emailEvants() :void 
  {
    let obj=this
    let elementRef=this.elementRef
    let elementRefEmail = this.elementRef.nativeElement.querySelector('.email')
    elementRefEmail.addEventListener('keyup', function() {
      obj.RegisterService.ifAvailable(elementRefEmail.value).subscribe(
        (data) => {
           
           console.log(data)
        },
        (er)=>{ 
            console.log(er)
        }
      );
      obj.addClassEmailValid(obj.register.controls.email.errors,elementRefEmail)
      obj.showErrorsList(elementRefEmail,elementRef,'.emailValidErrors')
    });
  }
  
  private showErrorsList(elementRefID,elementRef,classValid:string) : void
  {
    let el=elementRef.nativeElement.querySelector(classValid)
    let logError=elementRef.nativeElement.querySelector('.input-group-text')
    if(elementRefID.classList.contains('is-invalid')){
      console.log('dqwdqwd')
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
    el.classList.add("is-invalid")
    if(!formItem){
      el.classList.remove("is-invalid")
      el.classList.add("is-valid")
    }
  }
}