import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.providers';
import { DatabaseModule } from 'src/database/database.module';
import { CreateUserCommand } from './commands/create-user.command';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders, CreateUserCommand],
  exports: [UsersService, CreateUserCommand],
})
export class UsersModule {}
