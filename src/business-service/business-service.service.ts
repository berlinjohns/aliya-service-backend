import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { serviceRequest } from './schemas/business.schma';
import mongoose from 'mongoose';

@Injectable()
export class BusinessServiceService {
  constructor(
    @InjectModel(serviceRequest.name)
    private businessServiceModel: mongoose.Model<serviceRequest>,
  ) {}

  async findAllRequestes(): Promise<serviceRequest[]> {
    const serviceRequestes = await this.businessServiceModel.find();
    return serviceRequestes;
  }

  async createRequest(request: serviceRequest): Promise<serviceRequest> {
    const Request = await this.businessServiceModel.create(request);
    return Request;
  }

  async findById(id: string): Promise<serviceRequest> {
    const serviceRequest = await this.businessServiceModel.findById(id);
    if (!serviceRequest) {
      throw new NotFoundException(
        'The Service Request with the given ID not Found',
      );
    }
    return serviceRequest;
  }

  async updateById(
    id: string,
    serviceRequest: serviceRequest,
  ): Promise<serviceRequest> {
    return await this.businessServiceModel.findByIdAndUpdate(
      id,
      serviceRequest,
      {
        new: true,
        runValidators: true,
      },
    );
  }
    
  async deleteById(
    id: string,
  ): Promise<serviceRequest> {
    return await  this.businessServiceModel.findByIdAndDelete(id)
  }
    
  
}
