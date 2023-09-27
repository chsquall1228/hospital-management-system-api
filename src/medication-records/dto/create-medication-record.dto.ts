import { MedicineRecordItemDto } from './medication-record-item.dto';

export class CreateMedicationRecordDto {
  description: String;
  issueAt: Date;
  items: MedicineRecordItemDto[];
}
