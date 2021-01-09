import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  @IsNotEmpty()
  username: string;

  @MinLength(8)
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  password: string;
}
