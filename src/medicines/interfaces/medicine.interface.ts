import { Document } from 'mongoose';

export interface Medicine extends Document {
  readonly name: string;
  readonly description: string;
  readonly sideEffects: string;
}
