import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(45)
  @Matches('/^[a-zA-Z]{3,45}$/')
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @MinLength(7)
  @MaxLength(255)
  @IsNotEmpty()
  readonly email: string;

  @IsString({ message: 'Password must be an string' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @MaxLength(255, { message: 'Password length must me less or equal 255' })
  @IsNotEmpty()
  readonly password: string;

  @IsDate({ message: 'Created at column must be a date' })
  @IsOptional()
  readonly created_at?: Date;

  @IsDate({ message: 'Updated at column must be a date' })
  @IsOptional()
  readonly updated_at?: Date;
}
