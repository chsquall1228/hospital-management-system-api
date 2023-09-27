import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MedicationRecordsService } from './medication-records.service';
import { CreateMedicationRecordDto } from './dto/create-medication-record.dto';
import { UpdateMedicationRecordDto } from './dto/update-medication-record.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('medication-records')
@UseGuards(JwtAuthGuard)
@Controller('medication-records')
export class MedicationRecordsController {
  constructor(
    private readonly medicationRecordsService: MedicationRecordsService,
  ) {}

  @Post()
  create(@Body() createMedicationRecordDto: CreateMedicationRecordDto) {
    return this.medicationRecordsService.create(createMedicationRecordDto);
  }

  @Get()
  findAll() {
    return this.medicationRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicationRecordsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMedicationRecordDto: UpdateMedicationRecordDto,
  ) {
    return this.medicationRecordsService.update(id, updateMedicationRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicationRecordsService.remove(id);
  }
}
