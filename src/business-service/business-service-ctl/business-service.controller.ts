import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BusinessServiceService } from '../business-service.service';
import { serviceRequest } from '../schemas/business.schma';
import { CreateRequestDto } from '../dto/create-request.dto';
import { UpdateRequestDto } from '../dto/update-requst.dto';

import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('servicerequestes')
export class BusinessServiceController {
  constructor(private businessService: BusinessServiceService) {}

  @Get()
  async getAllServiceRequests(@Query() query:ExpressQuery): Promise<serviceRequest[]> {
    return this.businessService.findAllRequestes(query);
  }

  @Get(':id')
  async getServiceRequest(
    @Param('id')
    id: string,
  ): Promise<serviceRequest> {
    return this.businessService.findById(id);
  }

  @Post('create')
  async createServiceRequest(
    @Body()
    serviceRequest: CreateRequestDto,
  ): Promise<serviceRequest> {
    return this.businessService.createRequest(serviceRequest);
  }

  @Put(':id')
  async updateServiceRequest(
    @Param('id')
    id: string,
    @Body()
    serviceRequest: UpdateRequestDto,
  ): Promise<serviceRequest> {
    return this.businessService.updateById(id, serviceRequest);
  }
    
  @Delete(":id")
  async deleteServiceRequests(
      @Param('id')
      id:string
  ): Promise<serviceRequest> {
    return this.businessService.deleteById(id);
  }
}
