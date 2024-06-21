import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import axios from 'axios';

@Injectable()
export class LocationsService {
  constructor(private readonly prisma: PrismaService) {}

  async getCoordinates(userId: string, dto: CreateLocationDto) {
    const query = `${dto.district}, ${dto.city}`;
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=1`;
    const headers = {
      accept: 'application/json',
      'content-type': 'application/json',
    };

    try {
      const response = await axios.get(url, { headers });
      if (!response || !response.data) {
        throw new Error('Invalid response from openstreetmap API');
      }
      const { lat, lon } = response.data[0];
      console.log(lat, lon);

      await this.prisma.locations.create({
        data: {
          name: dto.name,
          address: dto.address,
          postalCode: dto.postalCode,
          city: dto.city,
          district: dto.district,
          latitude: String(lat),
          longitude: String(lon),
          isMainLocation: false,
          user: {
            connect: { Id: userId },
          },
        },
      });
      return { latitude: lat, longitude: lon };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new HttpException(
          error.response?.data || 'OpenStreetMap API error',
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
