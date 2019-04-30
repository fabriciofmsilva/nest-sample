import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { DatabaseModule } from './database/database.module';
import { Cat } from './cats/entities/cat.entity'
@Module({
  imports: [CatsModule, DatabaseModule.forRoot([Cat])],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
