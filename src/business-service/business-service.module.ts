import { Module } from '@nestjs/common';
import { BusinessServiceService } from './business-service.service';
import { BusinessServiceController } from './business-service-ctl/business-service.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { businessServiceSchema } from './schemas/business.schma';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';

@Module({

  imports:[ ConfigModule.forRoot(
    {
      envFilePath: '.env',
      isGlobal:true
    }
  ), MailerModule.forRoot({
    transport:{
      host:"smtp.gmail.com",
      auth:{
        user:`${process.env.EMAIL}`,
        pass:`${process.env.MAIL_PASSWORD}`
      }
    }
  }),MongooseModule.forFeature([{name:'serviceRequest',schema:businessServiceSchema},
 
])],  
  controllers: [ BusinessServiceController],
  providers: [BusinessServiceService],
})
export class BusinessServiceModule {}
