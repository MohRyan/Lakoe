import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsArray,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  sku: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  urlName: string;

  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true }) // Ensures each item in the array is a string
  attachments: string[];

  @IsNumber()
  @IsNotEmpty()
  stock: number;

  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @IsNotEmpty()
  @IsNumber()
  minimumOrder: number;

  @IsBoolean()
  isActive: boolean;

  @IsNumber()
  length?: number;

  @IsNumber()
  width?: number;

  @IsNumber()
  height?: number;

  @IsNotEmpty()
  @IsString()
  category: string;
}
