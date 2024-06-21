import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateCardItemsDto } from './create-cart.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateCardItemsDto extends PartialType(CreateCardItemsDto) {}

export class UpdateCardsDto {
  @IsNotEmpty()
  @IsNumber()
  prices: number;
}
