import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ApiConfigService } from './shared/api-config.service';

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

	//    app.useGlobalFilters(new GlobalExceptionFilter(zenHireLogger, contextService));

	const apiConfigService = app.get(ApiConfigService);
	await app.listen(apiConfigService.port);
}
bootstrap();
