import {
  Controller,
  Post,
  Body,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Role } from '../auth/enums/role.enum';
import { Roles } from '../auth/decorators/roles.decorator';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(
    private readonly transactionsService: TransactionsService,
    private readonly jwtService: JwtService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Buyer)
  @Post()
  async create(@Body('items') dto: CreateTransactionDto[], @Request() req) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    try {
      const decoded = this.jwtService.decode(token) as any;
      const userId = decoded.sub;

      return await this.transactionsService.create(userId, dto);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
