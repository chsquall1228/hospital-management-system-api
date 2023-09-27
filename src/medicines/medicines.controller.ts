import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MedicineDto } from './dto/medicine.dto';
import { RequestPageDto } from 'src/commons/dto/request-page.dto';
import { Pagination } from 'src/commons/dto/pagination.dto';

@ApiBearerAuth()
@ApiTags('medicines')
@UseGuards(JwtAuthGuard)
@Controller('medicines')
export class MedicinesController {
  constructor(private readonly medicinesService: MedicinesService) {}

  @Post()
  create(@Body() createMedicineDto: CreateMedicineDto) {
    return this.medicinesService.create(createMedicineDto);
  }

  @Get()
  async findAll(
    @Query() query: RequestPageDto,
  ): Promise<Pagination<MedicineDto>> {
    const response = new Pagination<MedicineDto>(
      (await this.medicinesService.findAll(query)).map(
        (item) => new MedicineDto(item),
      ),
      await this.medicinesService.findCount(query),
    );
    return response;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicinesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMedicineDto: UpdateMedicineDto,
  ) {
    return this.medicinesService.update(id, updateMedicineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicinesService.remove(id);
  }
}
