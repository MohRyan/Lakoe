import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCardItemsDto } from './dto/create-cart.dto';
import { UpdateCardItemsDto, UpdateCardsDto } from './dto/update-cart.dto';
import { CardItems, Cards } from '@prisma/client';

@Injectable()
export class CartsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCardItemsDto): Promise<Cards> {
    try {
      return await this.prisma.cards.update({
        where: {
          userId: dto.userId,
        },
        data: {
          cardItems: {
            create: {
              userId: dto.userId,
              name: dto.name,
              attachments: dto.attachments,
              price: dto.price,
              quantity: dto.quantity,
            },
          },
        },
      });
    } catch (error) {
      throw new Error('Failed to create card items. Error: ' + error);
    }
  }

  async update(Id: string, dto: UpdateCardItemsDto): Promise<CardItems> {
    try {
      return await this.prisma.cardItems.update({
        where: {
          Id: Id,
          // userId: userId,
        },
        data: {
          quantity: {
            set: dto.quantity,
          },
        },
      });
    } catch (error) {
      throw new Error('Failed to update cart. Error: ' + error);
    }
  }

  async deleted(Id: string): Promise<void> {
    try {
      await this.prisma.cardItems.delete({
        where: {
          Id: Id,
        },
      });
    } catch (error) {
      throw new Error('Failed to delete cart. Error: ' + error);
    }
  }

  async findAllByUserId(userId: string): Promise<CardItems[] | null> {
    try {
      return await this.prisma.cardItems.findMany({
        where: {
          userId: userId,
        },
      });
    } catch (error) {
      throw new Error('Failed to find cart by userId. Error: ' + error);
    }
  }

  async findAllByCardsId(): Promise<Cards> {
    try {
      const cardsId: string = '4e6aa9ec-e537-430b-a412-dd52859a94dd';
      return await this.prisma.cards.findFirst({
        where: {
          Id: cardsId,
        },
        include: {
          cardItems: true,
        },
      });
    } catch (error) {
      throw new Error('Failed to find cart by cardsId. Error: ' + error);
    }
  }

  async updateCards(cardsId: string, dto: UpdateCardsDto): Promise<Cards> {
    try {
      return await this.prisma.cards.update({
        where: {
          Id: cardsId,
        },
        data: {
          prices: {
            set: dto.prices,
          },
        },
      });
    } catch (error) {
      throw new Error('Failed to create card. Error: ' + error);
    }
  }
}
