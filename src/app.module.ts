import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { logger } from './common/middleware/logger.middleware';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { DatabaseModule } from './database/database.module';
import { Cat } from './cats/entities/cat.entity';
@Module({
  imports: [CatsModule, DatabaseModule.forRoot([Cat])],
  controllers: [AppController, CatsController],
  providers: [
    AppService,
    CatsService,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // .apply(LoggerMiddleware)
      .apply(logger)
      // .forRoutes({ path: 'cats', method: RequestMethod.GET });
      // .forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });
      // .forRoutes('cats');
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST }
      )
      .forRoutes(CatsController);
  }
}
