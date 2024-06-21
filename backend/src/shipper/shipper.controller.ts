import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ShipperService } from './shipper.service';
import { JwtService } from '@nestjs/jwt';
import axios from 'axios';
import { CreateShipperCostDto } from './dto/create-shipper.dto';

@Controller('shipper')
export class ShipperController {
  constructor(
    private readonly shipperService: ShipperService,
    private jwtService: JwtService,
  ) {}

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Buyer)
  @Get('provinces')
  async findProvinces() {
    try {
      const url = `https://api.rajaongkir.com/starter/province`;

      const secret = process.env.RAJAONGKIR_API_KEY;

      const headers = {
        accept: 'application/json',
        'content-type': 'application/json',
        key: `${secret}`,
      };

      const response = await axios.get(url, { headers });
      if (!response || !response.data) {
        throw new Error('Invalid response from Shipper API');
      }

      return response.data.rajaongkir.results;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new HttpException(
          error.response?.data || 'Shipper API error',
          error.response?.status || HttpStatus.BAD_REQUEST,
        );
      } else if (error instanceof HttpException) {
        throw error;
      } else {
        throw new HttpException(
          error.message || 'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Buyer)
  @Get('cities')
  async findCity(@Query('provinceId') provinceId: string) {
    try {
      const url = `https://api.rajaongkir.com/starter/city?province=${provinceId}`;

      const secret = process.env.RAJAONGKIR_API_KEY;

      const headers = {
        accept: 'application/json',
        'content-type': 'application/json',
        key: `${secret}`,
      };

      const response = await axios.get(url, { headers });
      if (!response || !response.data) {
        throw new Error('Invalid response from Shipper API');
      }

      return response.data.rajaongkir.results;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new HttpException(
          error.response?.data || 'Shipper API error',
          error.response?.status || HttpStatus.BAD_REQUEST,
        );
      } else if (error instanceof HttpException) {
        throw error;
      } else {
        throw new HttpException(
          error.message || 'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Buyer)
  @Post('cost')
  async createCost(@Body() body: CreateShipperCostDto) {
    try {
      const url = `https://api.rajaongkir.com/starter/cost`;

      const secret = process.env.RAJAONGKIR_API_KEY;

      const headers = {
        accept: 'application/json',
        'content-type': 'application/json',
        key: `${secret}`,
      };

      const response = await axios.post(url, body, { headers });
      if (!response || !response.data) {
        throw new Error('Invalid response from Shipper API');
      }

      return response.data.rajaongkir.results[0].costs;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new HttpException(
          error.response?.data || 'Shipper API error',
          error.response?.status || HttpStatus.BAD_REQUEST,
        );
      } else if (error instanceof HttpException) {
        throw error;
      } else {
        throw new HttpException(
          error.message || 'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
