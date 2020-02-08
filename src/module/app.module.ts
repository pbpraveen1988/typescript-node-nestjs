import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController, MetadataController } from '../controllers';
import { AppService, MetadataService } from '../services';
import { LoggerMiddleware } from '../middleware';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, MetadataController],
  providers: [AppService, MetadataService],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware);

  }
}
