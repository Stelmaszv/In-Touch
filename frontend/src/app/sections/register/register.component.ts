import {Component,OnInit, ElementRef,AfterViewInit} from '@angular/core';
import {RegisterService} from 'src/app/service/register/register.service'
import {PasswordValidService} from 'src/app/service/password/password-valid.service'
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
  public ngOnInit() :void
  {
    this.emailSection=this.RegisterService.getEmialErrorSection()
  }
  public ngAfterViewInit() :void 
  {
    this.passwordValid();
    this.emailEvants();
    this.birthdayEvants();
  }
  private passwordValid() :void
  {
    let obj=this
    let elmentRef = this.elementRef
    let eR = this.elementRef.nativeElement.querySelector('.password')
    eR.addEventListener('keyup', function() {
      moveIn(eR)
      posswordStrenght(this.value)
    });
    eR.addEventListener('focusout', function() {
      moveOut(eR)
    });
    function posswordStrenght(value:string){
      let progresBarStatus= elmentRef.nativeElement.querySelector('.progress-bar')
      progresBarStatus.style.width=obj.PasswordValid.validate(value)+"%"
      setPasswordStyle(progresBarStatus,obj.PasswordValid.validate(value));
    }
    function setPasswordStyle(progresBarStatus,procent:number){
        let className='bg-danger'
        if(procent>=50){
          className='bg-warning'
        }
        if(procent>=75){
          className='bg-success'
        }
        progresBarStatus.classList.add(className)
    }
    function moveIn(eR){
      progresSwich('visible')
      eR.style.borderRadius='0px 0px 10px 10px'
    }
    function moveOut(eR){
      progresSwich('hidden')
      eR.style.borderRadius='10px'
    }
    function progresSwich(swich:string){
      let progressBar = elmentRef.nativeElement.querySelector('.progress')
      progressBar.style.visibility= swich
    }
  }
  private birthdayEvants() :void 
  {
    let obj=this
    let eR = this.elementRef.nativeElement.querySelector('.birthday')
    eR.addEventListener('focusout', function() {
      eR.classList.add("is-invalid")
      if(obj.RegisterService.ifDataPassedRegister(this.value)){
        eR.classList.remove("is-invalid")
        eR.classList.add("is-valid")
      }
    });
  }
  private emailEvants() :void 
  {
    let obj=this
    let eR = this.elementRef.nativeElement.querySelector('.email')
    eR.addEventListener('keyup', function() {
      this.emailSection=obj.RegisterService.emailValid(this.value)
      obj.addClassEmailValid(eR,this.emailSection)
    });
  }
  private addClassEmailValid(el,Section) : void
  {
    el.classList.add("is-invalid")
    if(!Section.isInvalid && !Section.isBanned && !Section.isNotavailable){
      el.classList.remove("is-invalid")
      el.classList.add("is-valid")
    }
  }
}