import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  Delete,
  UseGuards,
  UnauthorizedException,
  Param,
  Put,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { JwtService } from '@nestjs/jwt';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';
import { CreateCardItemsDto } from './dto/create-cart.dto';
import { UpdateCardItemsDto, UpdateCardsDto } from './dto/update-cart.dto';

@Controller('cards')
export class CartsController {
  constructor(
    private readonly cartsService: CartsService,
    private jwtService: JwtService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Buyer)
  @Post()
  async create(@Body() dto: CreateCardItemsDto) {
    return await this.cartsService.create(dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Buyer)
  @Get()
  async findAllByUserId(@Request() req) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    try {
      const decoded = this.jwtService.decode(token) as any;
      const userId = decoded.sub;

      return await this.cartsService.findAllByUserId(userId);
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Buyer)
  @Delete(':Id')
  async deleted(@Param('Id') Id: string) {
    return await this.cartsService.deleted(Id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Buyer)
  @Put(':Id')
  async updated(@Param('Id') Id: string, @Body() dto: UpdateCardItemsDto) {
    return await this.cartsService.update(Id, dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Buyer)
  @Put('updateCards/:cardsId')
  async updatedCards(
    @Param('cardsId') cardsId: string,
    @Body() dto: UpdateCardsDto,
  ) {
    return await this.cartsService.updateCards(cardsId, dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Buyer)
  @Get('findCards')
  async findAllByCardsId() {
    return await this.cartsService.findAllByCardsId();
  }
}
