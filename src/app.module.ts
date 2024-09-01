import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { SharedModule } from './shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { envValidationSchema } from './shared/api-config.service';

@Module({
  imports: [DatabaseModule, UserModule, RestaurantModule,
  SharedModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
