import { Module } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { MedicinesController } from './medicines.controller';
import { medicinesProviders } from './medicines.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MedicinesController],
  providers: [MedicinesService, ...medicinesProviders],
})
export class MedicinesModule {}
