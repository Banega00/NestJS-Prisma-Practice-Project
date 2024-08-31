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

    public env = {
        envType: this.configService.get<EnvConfigType['NODE_ENV']>('NODE_ENV') ?? 'development',
        isDevOrTest: this.configService.get<EnvConfigType['NODE_ENV']>('NODE_ENV') === 'development' || this.configService.get<EnvConfigType['NODE_ENV']>('NODE_ENV') === 'test',
        port: +(this.configService.get<string>('PORT') ?? this.configService.get<string>('port')) ?? 3000
    }
}