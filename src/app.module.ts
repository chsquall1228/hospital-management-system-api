import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { MedicinesModule } from './medicines/medicines.module';
import { MedicationRecordsModule } from './medication-records/medication-records.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    MedicinesModule,
    MedicationRecordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
