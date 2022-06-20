import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port = process.env.PORT || 5000;
  await app.listen(port, () => {
    console.log(`Nest APP is running on port ${port}`);
  });
}

bootstrap();
