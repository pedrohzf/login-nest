import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { UnauthorizedInterceptor } from './interceptors/unauthorized.interceptor';
import { PrismaInterceptor } from './interceptors/prisma.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  app.useGlobalInterceptors(new UnauthorizedInterceptor());
  app.useGlobalInterceptors(new PrismaInterceptor());

  const config = new DocumentBuilder()
    .setTitle('NestJS User API')
    .setDescription('Simple API created with NestJS to handle User')
    .setVersion('0.0.1')
    .addTag('users')
    .addTag('login')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)

  await app.listen(3000);
}
bootstrap();
