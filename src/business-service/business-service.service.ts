import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { serviceRequest } from './schemas/business.schma';
import mongoose from 'mongoose';


import { Query  } from 'express-serve-static-core';

@Injectable()
export class BusinessServiceService {
  constructor(
    @InjectModel(serviceRequest.name)
    private businessServiceModel: mongoose.Model<serviceRequest>,
  ) {}

  async findAllRequestes(query: Query): Promise<serviceRequest[]> {
    const resPerPage = 2
    const currentPage = Number(query.page) || 1
    const skip =resPerPage* (currentPage-1)
    const category = query.category ? {
      category: {
        $regex: query.category,
        $options:'i'
      }
    }:{}
    const serviceRequestes = await this.businessServiceModel.find({ ...category }).limit(resPerPage).skip(skip);
    console.log(query)
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
