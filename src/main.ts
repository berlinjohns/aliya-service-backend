import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET, PUT, POST, DELETE',
  });
  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix('api/v1')
  await app.listen(80);
}
bootstrap();
