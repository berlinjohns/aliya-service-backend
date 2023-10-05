import { Module } from '@nestjs/common';
import { BusinessServiceService } from './business-service.service';
import { BusinessServiceController } from './business-service-ctl/business-service.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { businessServiceSchema } from './schemas/business.schma';

@Module({

  imports:[MongooseModule.forFeature([{name:'serviceRequest',schema:businessServiceSchema}])],  
  controllers: [ BusinessServiceController],
  providers: [BusinessServiceService],
})
export class BusinessServiceModule {}
