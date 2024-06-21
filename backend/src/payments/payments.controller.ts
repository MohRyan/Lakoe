import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  UnauthorizedException,
  Get,
  Query,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Role } from '../auth/enums/role.enum';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('payments')
export class PaymentsController {
  constructor(
    private readonly paymentsService: PaymentsService,
    private jwtService: JwtService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Buyer)
  @Post()
  create(@Body() dto: CreatePaymentDto, @Request() req) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    try {
      const decoded = this.jwtService.decode(token) as any;
      const userId = decoded.sub;

      return this.paymentsService.create(userId, dto);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
