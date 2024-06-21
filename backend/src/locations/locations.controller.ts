import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';
import { JwtService } from '@nestjs/jwt';

@Controller('locations')
export class LocationsController {
  constructor(
    private readonly locationsService: LocationsService,
    private jwtService: JwtService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Buyer)
  @Post()
  create(@Body() dto: CreateLocationDto, @Request() req) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    try {
      const decoded = this.jwtService.decode(token) as any;
      const userId = decoded.sub;

      return this.locationsService.getCoordinates(userId, dto);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
