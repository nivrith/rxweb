import {
    ValidatorFn,AbstractControl
} from "@angular/forms";
import { AlphaConfig } from "../models/config/alpha-config";
import { alphaValidator } from '../reactive-form-validators/index'
import { defaultContainer } from "../core/defaultContainer"
import { AnnotationTypes } from "../core/validator.static"
import {STRING } from '../const/validator.const';

export function allOfValidatorExtension(config?: AlphaConfig): ValidatorFn {
    var validator = alphaValidator(config,null);
    var rxwebValidator = (control:AbstractControl,target?:object): { [key: string]: any } => {
        if (typeof control == STRING)
          defaultContainer.init(target, 0, control, AnnotationTypes.alpha, config);
        else
          return validator(control);
      return null
    }
    return rxwebValidator;
}
