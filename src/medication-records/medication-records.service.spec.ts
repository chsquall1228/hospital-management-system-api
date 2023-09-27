import { Test, TestingModule } from '@nestjs/testing';
import { MedicationRecordsService } from './medication-records.service';

describe('MedicationRecordsService', () => {
  let service: MedicationRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicationRecordsService],
    }).compile();

    service = module.get<MedicationRecordsService>(MedicationRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
