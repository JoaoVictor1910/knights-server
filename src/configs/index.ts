import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { schemaModules } from 'src/models';
import envConfig from './env-config';

export const imports: any[] = [
  HttpModule,
  ConfigModule.forRoot({
    isGlobal: true,
    load: [envConfig],
  }),
  ...schemaModules,
];
