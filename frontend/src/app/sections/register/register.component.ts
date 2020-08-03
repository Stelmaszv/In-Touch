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
    console.log(this.RegisterService.ifDataPassed(313))
  }
  public ngAfterViewInit() :void 
  {
    this.evants()
  }
  private evants() :void 
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