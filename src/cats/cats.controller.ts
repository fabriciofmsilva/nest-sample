import {
  Controller, Get, Req, Post, Delete, HttpCode, Header, Param, Body, Query, Put,
} from '@nestjs/common';

import { of, Observable } from 'rxjs';

import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ListAllEntities } from './list-all-entities';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(201)
  create(
    @Body() createCatDto: CreateCatDto,
  ): Observable<Cat> {
    console.log('This action adds a new cat:', createCatDto);
    return of(this.catsService.create(createCatDto));
  }

  @Get()
  findAll(@Query() query: ListAllEntities): Observable<Cat[]> {
    console.log(`This action returns all cats (limit: ${query.limit} items)`);
    return of(this.catsService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id): Observable<Cat[]>  {
    console.log(`This actions returns a #${id} cat`);
    return of(this.catsService.findOne(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ): Observable<string>  {
    return of(`This action updates a #${id} cat`);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<string>  {
    return of(`This action removes a #${id} cat`);
  }
}
