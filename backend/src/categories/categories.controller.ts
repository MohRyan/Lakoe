import {
  Controller,
  Get,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';
import { JwtService } from '@nestjs/jwt';

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService,
    private jwtService: JwtService,
  ) {}

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Buyer)
  @Get()
  async findAll() {
    return await this.categoriesService.findAll();
  }
}
