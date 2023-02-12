import { Module } from '@nestjs/common';
import { services } from './services';
import { controllers } from './controllers';
import { imports } from './configs';
import { providers } from './providers';

@Module({
  imports: [...imports],
  controllers: [...controllers],
  providers: [...services, ...providers],
})
export class AppModule {}
