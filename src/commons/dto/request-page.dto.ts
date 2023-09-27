import { ApiProperty } from '@nestjs/swagger';

export class RequestPageDto {
  @ApiProperty()
  limit: number;

  @ApiProperty()
  offset: number;
}
