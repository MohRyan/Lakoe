import { Module } from '@nestjs/common';
import { ShipperService } from './shipper.service';
import { ShipperController } from './shipper.controller';
import { HttpModule } from '@nestjs/axios';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';

@Module({
  imports: [
    HttpModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [ShipperController],
  providers: [ShipperService],
})
export class ShipperModule {}
