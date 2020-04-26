import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController, DataController } from '../controllers';
import { AppService, DataService } from '../services';
import { LoggerMiddleware } from '../middleware';
import { DatabaseModule } from './database.module';
import { AllExceptionsFilter } from '../filters';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, DataController],
  providers: [AppService, DataService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    }
  ],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware).forRoutes(DataController);

  }
}
