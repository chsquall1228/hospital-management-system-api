import { Test, TestingModule } from '@nestjs/testing';
import { MedicationRecordsController } from './medication-records.controller';
import { MedicationRecordsService } from './medication-records.service';

describe('MedicationRecordsController', () => {
  let controller: MedicationRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicationRecordsController],
      providers: [MedicationRecordsService],
    }).compile();

    controller = module.get<MedicationRecordsController>(
      MedicationRecordsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
