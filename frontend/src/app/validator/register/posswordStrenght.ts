import { ValidatorFn, AbstractControl } from '@angular/forms';
import {PasswordValidService} from '../../service/password/password-valid.service'

export function posswordStrenght(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let passwordService= new PasswordValidService
      let posswordStrenght = (passwordService.validate(control.value) > 50) ? true : false;
      return !posswordStrenght ? {posswordStrenght: {value: control.value}} : null;
    };

  }
 