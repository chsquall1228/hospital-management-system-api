import { Connection } from 'mongoose';
import { MedicineSchema } from './schemas/medicine.schema';

export const medicinesProviders = [
  {
    provide: 'MEDICINE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Medicine', MedicineSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
