import { Inject, Injectable } from '@nestjs/common';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { Medicine } from './interfaces/medicine.interface';
import { Model } from 'mongoose';

@Injectable()
export class MedicinesService {
  constructor(
    @Inject('MEDICINE_MODEL')
    private medicineModel: Model<Medicine>,
  ) {}

  create(createMedicineDto: CreateMedicineDto) {
    const createdMedicine = new this.medicineModel(createMedicineDto);
    return createdMedicine.save();
  }

  findAll() {
    return this.medicineModel.find().exec();
  }

  findOne(id: string) {
    return this.medicineModel.findById(id).exec();
  }

  update(id: string, updateMedicineDto: UpdateMedicineDto) {
    return this.medicineModel.findByIdAndUpdate(id, updateMedicineDto);
  }

  remove(id: string) {
    return this.medicineModel.findByIdAndRemove(id);
  }
}
