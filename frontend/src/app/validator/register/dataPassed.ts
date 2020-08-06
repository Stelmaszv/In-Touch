import { ValidatorFn, AbstractControl } from '@angular/forms';
import {TimeService} from 'src/app/service/time/time.service'

export function dataPassed(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let time=new TimeService
      const dataPassed = time.ifDataPassed(control.value)
      return !dataPassed ? {dataPassed: {value: control.value}} : null;
    };
  }
 
