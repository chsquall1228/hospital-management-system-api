import * as mongoose from 'mongoose';

export const MedicineSchema = new mongoose.Schema({
  name: String,
  description: String,
});
