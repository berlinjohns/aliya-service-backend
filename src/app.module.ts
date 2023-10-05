import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessServiceModule } from './business-service/business-service.module';
import { ConfigModule } from '@nestjs/config';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        envFilePath: '.env',
        isGlobal:true
      }
    ),
    MongooseModule.forRoot(process.env.DB_URL),
    BusinessServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
