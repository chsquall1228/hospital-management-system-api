import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    username: String,
    name: String,
    dob: Date,
    password: String,
  },
  {
    timestamps: true,
  },
);
