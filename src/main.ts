import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AllExceptionsFilter } from './filters';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();


  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  await app.listen(3000);
}
bootstrap();
