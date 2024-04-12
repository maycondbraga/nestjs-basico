import { IsNotEmpty, Length, Validate } from 'class-validator';
import { ValidAge } from '../validator-age';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty({ message: 'name cannot be empty' })
  @Length(2, 50, { message: 'name must be between 2 and 50 characters' })
  @Transform(({ value }) => value.toLowerCase())
  name: string;

  @IsNotEmpty()
  @Validate(ValidAge)
  age: number;
}
