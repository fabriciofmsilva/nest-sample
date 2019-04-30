import {
  Controller, Get, Req, Post, Delete, HttpCode, Header, Param, Body, Query, Put,
} from '@nestjs/common';

import { of, Observable } from 'rxjs';

import { CreateCatDto } from './create-cat.dto';
import { UpdateCatDto } from './update-cat.dto';
import { ListAllEntities } from './list-all-entities';

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(201)
  create(
    @Body() createCatDto: CreateCatDto,
  ): Observable<string> {
    console.log(createCatDto);
    return of('This action adds a new cat');
  }

  @Get()
  findAll(@Query() query: ListAllEntities): Observable<string>  {
    return of(`This action returns all cats (limit: ${query.limit} items)`);
  }

  @Get(':id')
  findOne(@Param('id') id): Observable<string>  {
    console.log(id);
    return of(`This actions returns a #${id} cat`);
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
