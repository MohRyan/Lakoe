import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PassportModule } from '@nestjs/passport';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaymentsGateway } from './payments.gateway';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    HttpModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
    PrismaModule,
    // EventEmitterModule.forRoot(),
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService, PaymentsGateway, PrismaService],
})
export class PaymentsModule {}
