import {
  Controller,
  Post,
  Body,
  Request,
  UploadedFiles,
  UnauthorizedException,
  UseGuards,
  Get,
  Query,
  Header,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { JwtService } from '@nestjs/jwt';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private jwtService: JwtService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Seller)
  @Header('Content-Type', 'multipart/form-data')
  @UseInterceptors(FilesInterceptor('files'))
  @Post()
  async create(
    @Body() dto: CreateProductDto,
    @Request() req,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    try {
      const decoded = this.jwtService.decode(token) as any;
      const userId = decoded.sub;

      return await this.productsService.create(userId, dto, files);
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Buyer)
  @Get()
  async getProductByCategoryAndSearch(
    @Query('search') search?: string,
    @Query('categoriesId') categoriesId?: string,
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
    @Query('sortBy') sortBy?: string,
    @Query('sortOrder') sortOrder?: 'asc' | 'desc',
  ) {
    return this.productsService.getProductByCategoryAndSearch(
      search,
      categoriesId,
      minPrice,
      maxPrice,
      sortBy,
      sortOrder,
    );
  }
}
