import { ConfigModule, ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    imports: [ConfigModule],
    provide: 'DATABASE_CONNECTION',
    useFactory: async (
      configService: ConfigService,
    ): Promise<typeof mongoose> => {
      const connectionData = {
        host: configService.get<string>('mongodb.database.connectionString'),
        databaseName: configService.get<string>(
          'mongodb.database.databaseName',
        ),
      };
      const connection = await mongoose.connect(`${connectionData.host}`);
      return connection;
    },
    inject: [ConfigService],
  },
];
