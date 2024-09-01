import { Inject, Injectable, Scope } from "@nestjs/common";
import { createLogger, format, Logger, transports } from "winston";
import { ApiConfigService } from "./api-config.service";
import { INQUIRER } from "@nestjs/core";
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';


@Injectable({ scope: Scope.TRANSIENT })
export class LoggingService {

    constructor(
        private configService: ApiConfigService, 
        // private readonly contextService: ContextService, 
        @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: Logger, 
        @Inject(INQUIRER) private readonly source?: string | object) {
        this.logger = createLogger({
            level: 'info',
            format: format.json(),
            transports: [
                new transports.Console(),
            ],
        });
    }

    log(message: string) {
        this.logger.info(message);
    }

    error(message: string, trace: string) {
        this.logger.error(message, { trace });
    }

    warn(message: string) {
        this.logger.warn(message);
    }

    debug(message: string) {
        this.logger.debug(message);
    }
}