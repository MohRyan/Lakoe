import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Category[]> {
    try {
      const data = await this.prisma.categories.findMany({
        where: {
          parentId: null,
        },
        select: {
          Id: true,
          name: true,
        },
      });

      const categories = data.map((category) => {
        return { Id: category.Id, name: category.name };
      });

      return categories;
    } catch (error) {
      throw new Error('Failed to find categories. Error: ' + error);
    }
  }
}
