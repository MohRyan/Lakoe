import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import cloudinary from 'src/config/cloudinary';
import * as fs from 'fs';
import { Categories, Products } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    userId: string,
    dto: CreateProductDto,
    files: Express.Multer.File[],
  ): Promise<Products | null> {
    try {
      const store = await this.prisma.stores.findFirst({
        where: { userId },
      });

      if (!store) {
        throw new Error("Store doesn't exist");
      }

      let attachmentsURL: string[] = [];

      if (!files) {
        attachmentsURL = [];
      } else {
        // check if multiple files are uploaded
        if (Array.isArray(files)) {
          for (const file of files as Express.Multer.File[]) {
            const result = await cloudinary.uploader.upload(file.path, {
              folder: 'lakoe-not-teams',
            });
            attachmentsURL.push(result.secure_url);
            fs.unlinkSync(file.path);
          }
        } else {
          // single file uploaded
          const file = files as unknown as Express.Multer.File;
          const result = await cloudinary.uploader.upload(file.path, {
            folder: 'lakoe-not-teams',
          });
          attachmentsURL.push(result.secure_url);
          fs.unlinkSync(file.path);
        }
      }

      const categories = await this.prisma.categories.findFirst({
        where: { name: dto.category },
      });

      // if size is not provided, set it to 0
      if (!dto.length && !dto.width && !dto.height) {
        dto.length = 0;
        dto.width = 0;
        dto.height = 0;
      }

      const product = await this.prisma.products.create({
        data: {
          name: dto.name,
          sku: dto.sku,
          price: +dto.price,
          urlName: dto.urlName,
          description: dto.description,
          attachments: attachmentsURL,
          stock: +dto.stock,
          weight: +dto.weight,
          minimumOrder: +dto.minimumOrder,
          isActive: Boolean(dto.isActive),
          length: dto.length,
          width: dto.width,
          height: dto.height,
          store: {
            connect: {
              Id: store.Id,
            },
          },
          categories: {
            connect: {
              Id: categories.Id,
            },
          },
        },
      });

      // does not have to be displayed
      return product;
    } catch (error) {
      throw new Error('Error while creating product. Error: ' + error);
    }
  }

  private async getAllSubcategoryIds(categoriesId: string): Promise<string[]> {
    const subcategories = await this.prisma.categories.findMany({
      where: { parentId: categoriesId },
      select: { Id: true },
    });

    let subcategoryIds = subcategories.map((subcategory) => subcategory.Id);

    for (const subcategory of subcategories) {
      const subSubcategoryIds = await this.getAllSubcategoryIds(subcategory.Id);
      subcategoryIds = subcategoryIds.concat(subSubcategoryIds);
    }

    return subcategoryIds;
  }

  private async getMainCategory(
    categoriesId: string,
  ): Promise<Categories | null> {
    let category = await this.prisma.categories.findUnique({
      where: { Id: categoriesId },
    });
    while (category && category.parentId) {
      category = await this.prisma.categories.findUnique({
        where: { Id: category.parentId },
      });
    }
    return category;
  }

  async getProductByCategoryAndSearch(
    search?: string,
    categoriesId?: string,
    minPrice?: number,
    maxPrice?: number,
    sortBy?: string,
    sortOrder?: 'asc' | 'desc',
  ): Promise<ProductEntity[] | null> {
    try {
      const where: Prisma.ProductsWhereInput = {
        isActive: true,
      };
      if (search) {
        where.OR = [
          { name: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
          { sku: { contains: search, mode: 'insensitive' } },
        ];
      }

      if (categoriesId) {
        const subcategoryIds = await this.getAllSubcategoryIds(categoriesId);

        where.categoriesId = { in: subcategoryIds };
      }

      if (minPrice !== undefined || maxPrice !== undefined) {
        where.price = {};
        if (minPrice !== undefined) {
          where.price.gte = minPrice;
        }
        if (maxPrice !== undefined) {
          where.price.lte = maxPrice;
        }
      }

      const orderBy: Prisma.ProductsOrderByWithRelationInput = {};
      if (sortBy) {
        orderBy[sortBy] = sortOrder || 'asc';
      }

      const products = await this.prisma.products.findMany({
        where,
        orderBy,
        include: {
          categories: true,
        },
      });

      return await Promise.all(
        products.map(async (product) => {
          const mainCategoriesId = await this.getMainCategory(
            product.categoriesId,
          );
          return {
            ...product,
            mainCategoriesId: mainCategoriesId.Id,
          };
        }),
      );
    } catch (error) {
      throw new Error('Error while getting products. Error: ' + error);
    }
  }
}
