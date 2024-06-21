import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCardItemsDto {
  @IsString()
  Id: string;

  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsString()
  attachments: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
