import {
    ValidatorFn,
    AbstractControl
} from "@angular/forms";

import { RegexValidator } from "../util/regex-validator";
import { RegExRule } from "../util/regex-rules";
import { ObjectMaker } from "../util/object-maker";
import { BaseConfig } from "../models/config/base-config";
import { AnnotationTypes } from "../core/validator.static";
import { FormProvider } from '../util/form-provider';
import { ApplicationUtil } from '../util/app-util';
export function evenValidator(config: BaseConfig): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        config = ApplicationUtil.getConfigObject(config);
       if (FormProvider.ProcessRule(control,config)) {
            if (RegexValidator.isNotBlank(control.value)) {
                if (!(control.value % 2 == 0))
                    return ObjectMaker.toJson(AnnotationTypes.even, config.message || null, [control.value]);
            }
        } return ObjectMaker.null();
    }
}
