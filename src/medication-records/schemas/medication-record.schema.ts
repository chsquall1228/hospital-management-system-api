import * as mongoose from 'mongoose';

const MedicationRecordItemSchema = new mongoose.Schema({
  medicine: mongoose.Types.ObjectId,
  tablets: Number,
  takeTimeRange: [String],
  takeSchedule: String,
  mg: Number,
  startAt: Date,
  endAt: Date,
});

export const MedicationRecordSchema = new mongoose.Schema(
  {
    items: [MedicationRecordItemSchema],
    user: mongoose.Types.ObjectId,
    issueAt: Date,
    isActive: Boolean,
  },
  {
    timestamps: true,
  },
);
