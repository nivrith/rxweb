import {
  ValidatorFn,
  AbstractControl
} from "@angular/forms";

import { AnnotationTypes } from "../core/validator.static";
import { RelationalOperatorConfig } from "../models/config/relational-operator-config";
import { relationalCheck } from "../util/relational-checker.function";
import { RELATIONAL_OPERATOR_CONFIG } from "../const/config-names.const";
export function lessThanValidator(configModel: RelationalOperatorConfig): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return relationalCheck(control, configModel, AnnotationTypes.lessThan,RELATIONAL_OPERATOR_CONFIG)
  }
}
