import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class UpdateStoreDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  slogan?: string;

  @IsString()
  description?: string;

  @IsString()
  domain?: string;

  @IsArray()
  @IsString() // Ensures each item in the array is a string
  logoAttachment: string[];

  @IsString()
  bannerAttachment?: string;
}
