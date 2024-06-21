import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateStoreDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  slogan?: string;

  @IsString()
  description?: string;

  @IsString()
  domain?: string;

  @IsString()
  bannerAttachment?: string;

  @IsNotEmpty()
  @IsString()
  accountBankName?: string;

  @IsArray()
  @IsString({ each: true })
  nameBank?: string[];
}
