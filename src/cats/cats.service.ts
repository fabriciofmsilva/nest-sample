import { Injectable } from '@nestjs/common';

import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat): Cat {
    this.cats.push({
      id: this.cats.length,
      ...cat,
    });
    return this.cats[this.cats.length + 1];
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number): Cat[] {
    return this.cats.filter((cat) => cat.id === id);
  }
}
