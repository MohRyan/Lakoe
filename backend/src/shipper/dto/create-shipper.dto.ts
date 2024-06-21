import { IsNotEmpty, IsString } from 'class-validator';

export class CreateShipperDto {}
export class CreateShipperCostDto {
  @IsNotEmpty()
  @IsString()
  origin: string;

  @IsNotEmpty()
  @IsString()
  destination: string;

  @IsNotEmpty()
  @IsString()
  weight: number;

  @IsNotEmpty()
  @IsString()
  courier: string;
}
