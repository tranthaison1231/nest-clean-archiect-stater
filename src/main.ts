import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { validationOptions } from './core/config/validation-options';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.setGlobalPrefix('api');
	app.useGlobalPipes(new ValidationPipe(validationOptions));

	app.enableCors({
		credentials: true,
		origin: true,
	});

	app.use(cookieParser());

	const config = new DocumentBuilder()
		.setTitle('Facebook API')
		.setDescription('Facebook API description')
		.setVersion('1.0')
		.addBearerAuth()
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('document', app, document);

	await app.listen(3000);
}

bootstrap();
