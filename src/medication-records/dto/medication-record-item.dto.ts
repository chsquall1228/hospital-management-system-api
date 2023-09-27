import { ApiProperty } from '@nestjs/swagger';

export class MedicineRecordItemDto {
  @ApiProperty()
  medicineId: string;

  @ApiProperty()
  tablets: number;

  @ApiProperty()
  takeTimeRange: string[];

  @ApiProperty()
  takeSchedule: number;

  @ApiProperty()
  mg: number;

  @ApiProperty()
  startAt: Date;

  @ApiProperty()
  endAt: Date;
}
