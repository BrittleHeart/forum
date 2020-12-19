import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

const host_black_listed_array: Array<string | RegExp> = [
  'pornhub.com',
  'pinktube.com',
  'xVideos.com',
];

export class CreateProfileDto {
  @IsUrl({
    host_blacklist: host_black_listed_array,
    protocols: ['http', 'https'],
  })
  @IsString()
  readonly avatar_url: string;

  @IsString()
  @MinLength(3)
  @MaxLength(255)
  @IsNotEmpty()
  readonly first_name: string;

  @IsString()
  @MinLength(3)
  @MaxLength(255)
  @IsNotEmpty()
  readonly last_name: string;

  @IsOptional()
  @MinLength(3)
  @MaxLength(85)
  @IsString()
  readonly city: string;

  @IsOptional()
  @IsString()
  @IsUrl({
    host_blacklist: host_black_listed_array,
    protocols: ['http', 'https'],
  })
  readonly homepage: string;

  @IsOptional()
  @IsString()
  @MinLength(10)
  @MaxLength(5000)
  readonly info: string;
}
