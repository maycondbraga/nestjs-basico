import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty({ message: 'name cannot be empty' })
  @Length(2, 50, { message: 'name must be between 2 and 50 characters' })
  @Transform(({ value }) => value.toLowerCase())
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
