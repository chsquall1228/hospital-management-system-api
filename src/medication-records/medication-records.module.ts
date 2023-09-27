import { Module } from '@nestjs/common';
import { MedicationRecordsService } from './medication-records.service';
import { MedicationRecordsController } from './medication-records.controller';
import { medicationRecordProviders } from './medication-records.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MedicationRecordsController],
  providers: [MedicationRecordsService, ...medicationRecordProviders],
})
export class MedicationRecordsModule {}
