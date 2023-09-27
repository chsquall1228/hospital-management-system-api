import { Inject, Injectable } from '@nestjs/common';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { Medicine } from './interfaces/medicine.interface';
import { Model } from 'mongoose';
import { RequestPageDto } from 'src/commons/dto/request-page.dto';

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

  findAll(query: RequestPageDto): Promise<Medicine[]> {
    return this.medicineModel
      .find({}, null, { limit: query.limit, skip: query.offset })
      .exec();
  }

  findCount(query: RequestPageDto): Promise<number> {
    return this.medicineModel.countDocuments().exec();
  }

  findOne(id: string) {
    return this.medicineModel.findById(id).exec();
  }

  update(id: string, updateMedicineDto: UpdateMedicineDto) {
    return this.medicineModel.findByIdAndUpdate(id, updateMedicineDto).exec();
  }

  remove(id: string) {
    return this.medicineModel.findByIdAndRemove(id).exec();
  }
}
