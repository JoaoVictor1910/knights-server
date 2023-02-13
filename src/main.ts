import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import envConfig from './configs/env-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.startAllMicroservices();
  await app.listen(envConfig().port, '0.0.0.0', () =>
    console.log(`Listening on port ${envConfig().port}.`),
  );
}
bootstrap();
