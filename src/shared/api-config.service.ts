import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { z } from "zod";

export const envValidationSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.string().transform((str) => parseInt(str, 10)).default('3000'),
});

type EnvConfigType = z.infer<typeof envValidationSchema>;

@Injectable()
export class ApiConfigService{
    constructor(private readonly configService: ConfigService){

    }

    get port(): EnvConfigType['PORT']{
        return +(this.configService.get<string>('PORT') ?? this.configService.get<string>('port')) ?? 3000;
    }

    get env(): EnvConfigType['NODE_ENV']{
        return this.configService.get<EnvConfigType['NODE_ENV']>('NODE_ENV') ?? 'development';
    }

    get isDevOrTest(): boolean{
        return this.env === 'development' || this.env === 'test';
    }
}