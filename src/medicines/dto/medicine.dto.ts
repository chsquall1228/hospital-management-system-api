import { ApiProperty } from '@nestjs/swagger';
import { Medicine } from '../interfaces/medicine.interface';

export class MedicineDto {
  constructor(medicine: Medicine) {
    this.id = medicine._id;
    this.name = medicine.name;
    this.description = medicine.description;
    this.sideEffects = medicine.sideEffects;
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  sideEffects: string;
}
