import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // const app = await NestFactory.create<NestFastifyApplication>(AppModule);
  const app = await NestFactory.create(AppModule);
  // Global middleware
  // app.use(logger);
  // Global filter
  // app.useGlobalFilters(new HttpExceptionFilter());
  // const { httpAdapter } = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  // Global pipe
  // app.useGlobalPipes(new ValidationPipe());
  // Global guards
  // app.useGlobalGuards(new RolesGuard());
  await app.listen(4000);
}
bootstrap();
