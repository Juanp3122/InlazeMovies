import { config } from 'dotenv';
config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('API Docs')
    .setDescription('Api documentation for inlaze movie project')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('items')
    .build()

    const document = SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('documentation',app,document)
    app.useGlobalPipes(new ValidationPipe());
    await app.listen('3000')

}
bootstrap();
