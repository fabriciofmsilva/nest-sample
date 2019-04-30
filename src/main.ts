import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // const app = await NestFactory.create<NestFastifyApplication>(AppModule);
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
