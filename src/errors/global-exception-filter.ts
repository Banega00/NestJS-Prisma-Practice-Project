import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, NotFoundException } from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomError, CustomErrorType } from './custom.error';
import { ApiConfigService } from 'src/shared/api-config.service';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
	constructor(private readonly configService: ApiConfigService) {
		process.on('uncaughtException', (error: Error) => {
		});

		process.on('unhandledRejection', (reason: {} | null | undefined, promise: Promise<any>) => {
		});
	}

	catch(exception: Error, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		const request = ctx.getRequest<Request>();

		//logic for validation exceptions
		if (exception instanceof BadRequestException) {
			const message = exception.message || CustomErrorType.VALIDATION_ERROR.message;

			//give validation details only in development environment
			const errorPayload = this.configService.env.isDevOrTest ? (exception as any).response.message : undefined;
			// this.zenHireLogger.log(`${Date.now() - this.contextService.get('startTimestamp')}msec |${request.method} ${request.url} | status: ${response.statusCode}`, {
			// 	label: 'Request end',
			// });
			return response.status(400).json({
				statusCode: CustomErrorType.VALIDATION_ERROR.code,
				message: message ?? CustomErrorType.VALIDATION_ERROR.message,
				payload: errorPayload,
				status: 400,
			});
		}

		if (exception instanceof NotFoundException) {
			// this.zenHireLogger.error(`NOT FOUND: ${request.method} ${request.url}`);
			// this.zenHireLogger.log(`${Date.now() - this.contextService.get('startTimestamp')}msec |${request.method} ${request.url} | status: ${response.statusCode}`, {
			// 	label: 'Request end',
			// });
			return response.status(404).json({
				statusCode: CustomErrorType.NOT_FOUND.code,
				message: CustomErrorType.NOT_FOUND.message,
				payload: undefined,
				status: 404,
			});
		}

		if (exception instanceof CustomError) {
			const errorPayload = this.configService.env.isDevOrTest ? exception.error?.stack : undefined;

			// this.zenHireLogger.error(exception, { context: `Custom Error - ${exception.errorType} - ${exception.code}`, data: exception.payload });

			// this.zenHireLogger.log(`${Date.now() - this.contextService.get('startTimestamp')}msec |${request.method} ${request.url} | status: ${response.statusCode}`, {
			// 	label: 'Request end',
			// });
			return response.status(exception.status).json({
				statusCode: exception.code,
				message: exception.message,
				payload: exception.payload ?? errorPayload,
				status: exception.status,
			});
		}

		//send info about error stack in response if environment is development
		const errorPayload = (this.configService.env.isDevOrTest) ? exception.stack : undefined;

		response.status(500).json({
			statusCode: CustomErrorType.UNKNOWN_ERROR.code,
			message: exception.message || CustomErrorType.UNKNOWN_ERROR.message,
			payload: errorPayload,
			status: 500,
		});

		// this.zenHireLogger.error(exception, { context: 'Unknown Error' });

		// this.zenHireLogger.log(`${Date.now() - this.contextService.get('startTimestamp')}msec |${request.method} ${request.url} | status: ${response.statusCode}`, {
		// 	label: 'Request end',
		// });
	}
}
