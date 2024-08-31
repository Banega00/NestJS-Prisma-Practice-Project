import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiConfigService, envValidationSchema } from './api-config.service';

@Global()
@Module({
    imports: [
    ConfigModule.forRoot({
        validate(config) {
            const result = envValidationSchema.safeParse(config);
  
            if(result.success) return config;
  
            throw new Error(result.error.message);
        },
    })],
    providers: [ApiConfigService],
    exports: [ApiConfigService],
})
export class SharedModule {}