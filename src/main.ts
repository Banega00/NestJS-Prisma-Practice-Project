import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ApiConfigService } from './shared/api-config.service';
import { CustomError, CustomErrorType } from './errors/custom.error';
import { GlobalExceptionFilter } from './errors/global-exception-filter';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableShutdownHooks();

	const apiConfigService = app.get(ApiConfigService);

	app.useGlobalPipes(
		new ValidationPipe({
			exceptionFactory: (errors) => {
				return new CustomError({
					status: 422,
					type: 'VALIDATION_ERROR',
					payload: errors,
				});
			},
			disableErrorMessages:!apiConfigService.env.isDevOrTest,
		}),
	);

	app.useGlobalFilters(new GlobalExceptionFilter(apiConfigService));

	await app.listen(apiConfigService.env.port);
}
bootstrap();
