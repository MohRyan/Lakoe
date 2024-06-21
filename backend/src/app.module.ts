import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { StoresModule } from './stores/stores.module';
import { ProductsModule } from './products/products.module';
import { TransactionsModule } from './transactions/transactions.module';
import { PaymentsModule } from './payments/payments.module';
import { LocationsModule } from './locations/locations.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './logger/logging.interceptor';
import { ShutdownObserver } from './utils/shutdown';
import { CategoriesModule } from './categories/categories.module';
import { ShipperModule } from './shipper/shipper.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    StoresModule,
    ProductsModule,
    TransactionsModule,
    PaymentsModule,
    LocationsModule,
    CategoriesModule,
    ShipperModule,
    CartsModule,
  ],
  controllers: [],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    ShutdownObserver,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
