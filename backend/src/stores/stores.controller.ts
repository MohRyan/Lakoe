import {
  Controller,
  Post,
  Body,
  Request,
  UnauthorizedException,
  UseGuards,
  UseInterceptors,
  Put,
  Get,
  UploadedFiles,
  Header,
} from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Role } from '../auth/enums/role.enum';
import { Roles } from '../auth/decorators/roles.decorator';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('stores')
export class StoresController {
  constructor(
    private readonly storesService: StoresService,
    private jwtService: JwtService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Seller)
  @Post()
  @Header('Content-Type', 'multipart/form-data')
  @UseInterceptors(FilesInterceptor('files'))
  async create(
    @Body() dto: CreateStoreDto,
    @Request() req,
    @UploadedFiles() file: Array<Express.Multer.File>,
  ) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    try {
      const decoded = this.jwtService.decode(token) as any;
      const userId = decoded.sub;

      return this.storesService.create(userId, dto, file);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Seller)
  @Put()
  async update(
    @Body() dto: UpdateStoreDto,
    @UploadedFiles() file: Array<Express.Multer.File>,
    @Request() req,
  ) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    try {
      const decoded = this.jwtService.decode(token) as any;
      const userId = decoded.sub;

      return this.storesService.update(userId, dto, file);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Seller)
  @Get()
  async find(@Request() req) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    try {
      const decoded = this.jwtService.decode(token) as any;
      const userId = decoded.sub;

      return this.storesService.find(userId);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
