import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  const port = process.env.HTTP_PORT;
  await app.listen(port, () => {
    console.log('Application start with port: ', port);
  });
}
bootstrap();
