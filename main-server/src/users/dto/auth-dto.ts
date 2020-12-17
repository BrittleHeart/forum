import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class authDto {
  @IsEmail()
  @MinLength(7)
  @MaxLength(255)
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(255)
  @IsNotEmpty()
  readonly password: string;
}
