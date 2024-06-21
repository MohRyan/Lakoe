// src/auth/auth.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './entities/auth.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  private readonly logger = new Logger(AuthService.name);

  async validateUser(email: string, pass: string): Promise<User | null> {
    this.logger.log(`Finding user validation by email: ${email}`);
    const user = await this.prisma.user.findFirst({ where: { email } });
    if (user && (await bcrypt.compare(pass, user.password))) {
      return user;
    }
    this.logger.log(`User found: ${user ? user.name : 'Not Found'}`);
    return null;
  }

  async login(dto: LoginUserDto): Promise<{ token: string; user: object }> {
    this.logger.log(`Finding user for login by email: ${dto.email}`);
    const existingUser = await this.prisma.user.findFirst({
      where: { email: dto.email },
    });
    if (!existingUser) {
      throw new Error('User not found');
    }
    this.logger.log(
      `User found: ${existingUser ? existingUser.name : 'Not Found'}`,
    );

    this.logger.log('Checking password for login');
    const isPasswordValid = await bcrypt.compare(
      dto.password,
      existingUser.password,
    );

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    this.logger.log(
      `${isPasswordValid ? 'Password valid' : 'Password invalid'}`,
    );

    const payload = {
      username: existingUser.email,
      sub: existingUser.Id,
      role: existingUser.role,
    };
    this.logger.log('Generating token for login');
    return {
      token: this.jwtService.sign(payload),
      user: payload,
    };
  }

  async register(dto: CreateUserDto): Promise<User> {
    const { email } = dto;
    const existingUser = await this.prisma.user.findFirst({ where: { email } });
    if (existingUser) {
      throw new Error('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const createUser = await this.prisma.user.create({
      data: {
        ...dto,
        password: hashedPassword,
      },
    });

    await this.prisma.cards.create({
      data: {
        userId: createUser.Id,
        prices: 0,
        discount: 0,
      },
    });

    return createUser;
  }

  async checkToken(token: string): Promise<{ token: string; user: object }> {
    try {
      const jwt = this.jwtService.verify(token);

      const user: object = {
        username: jwt.username,
        sub: jwt.sub,
        role: jwt.role,
      };

      return { token: token, user: user };
    } catch (error) {
      return { token: '', user: {} };
    }
  }
}
