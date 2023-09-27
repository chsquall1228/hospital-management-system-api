import { ApiProperty } from '@nestjs/swagger';

export class Pagination<T> {
  constructor(items: T[], total: number) {
    this.items = items;
    this.total = total;
  }
  @ApiProperty()
  items: T[];

  @ApiProperty()
  total: number;
}
