import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'ValidAge', async: false })
export class ValidAge implements ValidatorConstraintInterface {
  validate(age: number) {
    return age > 18 ? true : false;
  }

  defaultMessage() {
    return 'age must be over 18 years old';
  }
}
