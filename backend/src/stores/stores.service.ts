import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Store } from './entities/store.entity';
import cloudinary from '../config/cloudinary';
import * as fs from 'fs';

@Injectable()
export class StoresService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    userId: string,
    dto: CreateStoreDto,
    file: Express.Multer.File[],
  ): Promise<Store | null> {
    try {
      const count = await this.prisma.stores.count();
      if (count > 1) {
        throw new Error("Can't create more than one store");
      }

      let logoURL: string[] = [];

      if (!file) {
        logoURL = [];
      } else {
        // check if multiple files are uploaded
        if (Array.isArray(file)) {
          for (const logo of file as Express.Multer.File[]) {
            const result = await cloudinary.uploader.upload(logo.path, {
              folder: 'lakoe-not-teams',
            });
            logoURL.push(result.secure_url);
            fs.unlinkSync(logo.path);
          }
        } else {
          // single file uploaded
          const logo = file as unknown as Express.Multer.File;
          const result = await cloudinary.uploader.upload(logo.path, {
            folder: 'lakoe-not-teams',
          });
          logoURL.push(result.secure_url);
          fs.unlinkSync(logo.path);
        }
      }

      return await this.prisma.stores.create({
        data: {
          userId: userId,
          name: dto.name,
          slogan: dto.slogan,
          logoAttachment: logoURL[0],
          description: dto.description,
          domain: dto.domain,
          bannerAttachment: dto.bannerAttachment,
          bankAccounts: {
            create: dto.nameBank.map((name) => ({
              bank: name,
              accountName: dto.accountBankName,
            })),
          },
        },
      });
    } catch (error) {
      throw new Error('Error while creating store. Error: ' + error);
    }
  }

  async update(
    userId: string,
    dto: UpdateStoreDto,
    file: Express.Multer.File[],
  ): Promise<Store> {
    try {
      const store = await this.prisma.stores.findFirst({
        where: { userId },
        select: { Id: true, logoAttachment: true },
      });

      if (!store) {
        throw new Error('Store not found');
      }

      let logoURL: string[] = [];

      if (!file) {
        logoURL = [];
      } else {
        // check if multiple files are uploaded
        if (Array.isArray(file)) {
          for (const img of file as Express.Multer.File[]) {
            const result = await cloudinary.uploader.upload(img.path, {
              folder: 'lakoe-not-teams',
            });
            logoURL.push(result.secure_url);
            fs.unlinkSync(img.path);
          }
        } else {
          // single file uploaded
          const img = file as unknown as Express.Multer.File;
          const result = await cloudinary.uploader.upload(img.path, {
            folder: 'lakoe-not-teams',
          });
          logoURL.push(result.secure_url);
          fs.unlinkSync(img.path);
        }
      }

      return await this.prisma.stores.update({
        where: { Id: store.Id },
        data: {
          ...dto,
          logoAttachment: logoURL[0],
        },
      });
    } catch (error) {
      throw new Error('Failed to update store. Error: ' + error);
    }
  }

  async find(userId: string): Promise<Store> {
    try {
      return await this.prisma.stores.findFirst({ where: { userId } });
    } catch (error) {
      throw new Error('Failed to find store. Error: ' + error);
    }
  }
}
