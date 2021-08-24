import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  await NestFactory.createApplicationContext(AppModule);
}
bootstrap();
