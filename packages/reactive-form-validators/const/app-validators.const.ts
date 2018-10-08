import {
    alphaNumericValidator, alphaValidator, compareValidator, emailValidator, hexColorValidator, lowercaseValidator,
    maxDateValidator, maxNumberValidator, minDateValidator, minNumberValidator, containsValidator, uppercaseValidator,
    rangeValidator, patternValidator, requiredValidator, creditCardValidator, digitValidator,
    maxLengthValidator, minLengthValidator, passwordValidator, timeValidator, urlValidator, jsonValidator,
  greaterThanEqualToValidator, greaterThanValidator, lessThanEqualToValidator, lessThanValidator,
  choiceValidator,differentValidator, numericValidator,evenValidator,oddValidator,factorValidator,leapYearValidator,allOfValidator, oneOfValidator, noneOfValidator, macValidator
} from '../reactive-form-validators/index';

export const APP_VALIDATORS: { [key: string]: Function } = {
    "alphaNumeric": alphaNumericValidator,
    "alpha": alphaValidator,
    "compare": compareValidator,
    "email": emailValidator,
    "hexColor": hexColorValidator,
    "lowerCase": lowercaseValidator,
    "maxDate": maxDateValidator,
    "maxNumber": maxNumberValidator,
    "minDate": minDateValidator,
    "minNumber": minNumberValidator,
    "contains": containsValidator,
    "upperCase": uppercaseValidator,
    "maxLength": maxLengthValidator,
    "minLength": minLengthValidator,
    "password": passwordValidator,
    "range": rangeValidator,
    "required": requiredValidator,
    "creditCard": creditCardValidator,
    "digit": digitValidator,
    "pattern": patternValidator,
    "time": timeValidator,
    "url": urlValidator,
    "json": jsonValidator,
    "greaterThan": greaterThanValidator,
    "greaterThanEqualTo": greaterThanEqualToValidator,
    "lessThan": lessThanValidator,
    "lessThanEqualTo": lessThanEqualToValidator,
    "choice": choiceValidator,
    "different": differentValidator,
    "numeric":numericValidator,
    "even":evenValidator,
    "odd":oddValidator,
    "factor":factorValidator,
    "leapYear":leapYearValidator,
    "allOf":allOfValidator,
    "oneOf":oneOfValidator,
    "noneOf":noneOfValidator,
    "mac":macValidator
}
