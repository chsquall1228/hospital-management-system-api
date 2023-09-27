import { Document } from 'mongoose';

export interface User extends Document {
  readonly username: string;
  readonly name: string;
  readonly dob: Date;
  readonly password: string;
}
