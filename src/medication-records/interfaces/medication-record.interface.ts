import { Document } from 'mongoose';
import { User } from 'src/users/interfaces/user.interface';

export interface MedicationRecord extends Document {
  readonly items: any[];
  readonly description: string;
  readonly user: User;
  readonly issueAt: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
