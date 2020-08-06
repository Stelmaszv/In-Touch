import { ValidatorFn, AbstractControl } from '@angular/forms';
import {FormControl} from '@angular/forms';

export function passwordMatch(otherControlName: string): ValidatorFn {
    let thisControl: FormControl;
    let otherControl: FormControl;
    return function matchOtherValidate (control: FormControl) {

        if (!control.parent) {
          return null;
        }
    
        // Initializing the validator.
        if (!thisControl) {
          thisControl = control;
          otherControl = control.parent.get(otherControlName) as FormControl;
          if (!otherControl) {
            throw new Error('matchOtherValidator(): other control is not found in parent group');
          }
        }
    
        if (!otherControl) {
          return null;
        }
    
        if (otherControl.value !== thisControl.value) {
          return {
            passwordNotMatch: true
          };
        }
    
        return null;
    
      }
  }
 
