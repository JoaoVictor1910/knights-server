import { Connection } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectConnection, MongooseModule } from '@nestjs/mongoose';
import envConfig from 'src/configs/env-config';
import { KnightsSchema } from './knights/knights.schema';

@Injectable()
export class DatabaseService {
  constructor(@InjectConnection() private connection: Connection) {}
}

const mongooseModules = MongooseModule.forFeature([
    {
        name: 'Knights',
        schema: KnightsSchema
    }
])

export const schemaModules = [
  MongooseModule.forRootAsync({
    useFactory: () => ({
      uri: envConfig().mongodb.mongodb_uri,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }),
  }),
  mongooseModules,
  DatabaseService
];
