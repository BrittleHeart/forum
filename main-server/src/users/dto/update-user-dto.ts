import { IsString, Max, Min } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @Min(3)
  @Max(45)
  readonly name: string;

  @IsString({ message: 'Password must be an string' })
  @Min(8, { message: 'Password must be at least 8 characters long' })
  @Max(255, { message: 'Password length must me less or equal 255' })
  readonly password;
}
