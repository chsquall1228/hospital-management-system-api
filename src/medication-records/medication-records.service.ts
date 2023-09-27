import { Inject, Injectable } from '@nestjs/common';
import { CreateMedicationRecordDto } from './dto/create-medication-record.dto';
import { UpdateMedicationRecordDto } from './dto/update-medication-record.dto';
import { MedicationRecord } from './interfaces/medication-record.interface';
import { Model } from 'mongoose';

@Injectable()
export class MedicationRecordsService {
  constructor(
    @Inject('MEDICATION_RECORD_MODEL')
    private medicationRecordModel: Model<MedicationRecord>,
  ) {}

  create(createMedicationRecordDto: CreateMedicationRecordDto) {
    return this.medicationRecordModel.create(createMedicationRecordDto);
  }

  findAll() {
    this.medicationRecordModel;
    return this.medicationRecordModel
      .find({}, null, { sort: { createdAt: -1 } })
      .exec();
  }

  findOne(id: string) {
    return this.medicationRecordModel.findById(id).exec();
  }

  update(id: string, updateMedicationRecordDto: UpdateMedicationRecordDto) {
    return this.medicationRecordModel
      .findByIdAndUpdate(id, updateMedicationRecordDto)
      .exec();
  }

  remove(id: string) {
    return this.medicationRecordModel.findByIdAndRemove(id).exec();
  }
}
