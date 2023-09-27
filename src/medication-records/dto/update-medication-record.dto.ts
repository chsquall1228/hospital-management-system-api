import { PartialType } from '@nestjs/swagger';
import { CreateMedicationRecordDto } from './create-medication-record.dto';

export class UpdateMedicationRecordDto extends PartialType(
  CreateMedicationRecordDto,
) {}
