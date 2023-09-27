import { Connection } from 'mongoose';
import { MedicationRecordSchema } from './schemas/medication-record.schema';

export const medicationRecordProviders = [
  {
    provide: 'MEDICATION_RECORD_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('MedicationRecord', MedicationRecordSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
