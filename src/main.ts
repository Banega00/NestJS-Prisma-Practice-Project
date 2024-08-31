import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();

  app.useGlobalPipes(
		new ValidationPipe({
			// exceptionFactory: (errors) => {
			// 	return new CustomError({
			// 		status: 422,
			// 		errorType: CustomErrorType.VALIDATION_ERROR,
			// 		payload: errors,
			// 	});
			// },
			// disableErrorMessages:!configService.env.isDevOrTest,
		}),
	);
  
  await app.listen(3000);
}
bootstrap();
