import {Component,OnInit, ElementRef,AfterViewInit} from '@angular/core';
import {RegisterService} from 'src/app/service/register/register.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit,AfterViewInit{
  public emailSection;
  public constructor(
    private RegisterService:RegisterService,
    private elementRef:ElementRef
  ){}
  public ngOnInit() :void
  {
    this.emailSection=this.RegisterService.getEmialErrorSection()
  }
  public ngAfterViewInit() :void 
  {
    this.emailEvants()
    this.birthdayEvants()
  }
  private birthdayEvants(){
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
  private emailEvants(){
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