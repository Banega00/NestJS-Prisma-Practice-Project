import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiConfigService, envValidationSchema } from './api-config.service';
import { LoggingService } from './logging.service';
import { WinstonModule } from 'nest-winston';
import { transports } from 'winston';

@Global()
@Module({
    imports: [
        WinstonModule.forRoot({
            transports: [
                new transports.Console({})
            ]
        }),
    ConfigModule.forRoot({
        validate(config) {
            const result = envValidationSchema.safeParse(config);
  
            if(result.success) return config;
  
            throw new Error(result.error.message);
        },
    })],
    providers: [ApiConfigService, LoggingService],
    exports: [ApiConfigService, LoggingService],
})
export class SharedModule {}