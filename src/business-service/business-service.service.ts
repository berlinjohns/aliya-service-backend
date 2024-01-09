import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { serviceRequest } from './schemas/business.schma';
import mongoose from 'mongoose';

import { Query  } from 'express-serve-static-core';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class BusinessServiceService {
  constructor(
    @InjectModel(serviceRequest.name)
    private businessServiceModel: mongoose.Model<serviceRequest>,
    private readonly mailerService:MailerService,
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
    this.sendMailToClient(request.email);
    this.sendMailToAdmin(request);
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
    
  async sendMailToClient(clientMailAddr:string):Promise<void>{
    this.mailerService.sendMail({
      to:`${clientMailAddr}`,
      from:'berlinjohns78@gmail.com',
      subject:'Aliya-Repair Request',
      text:'Thanks for selected us for your service , We caught your reqest, We contact and reach you with in next 1 hours. ',
      replyTo:'berlinjohns78@gmail.com'
    });
  }

  async sendMailToAdmin(serviceReq:serviceRequest):Promise<void>{
    this.mailerService.sendMail({
      to:'bibinrkoberlin@gmail.com',
      subject:'Aliya-Repair Request',
      html:`
        <h4> Hi admin you have new RepariRequest </h4>
        <div>Client Name : <b> ${serviceReq.name} </b> </div>
        <div>Client Email : <b> ${serviceReq.email} </b> </div>
        <div>Application  : <b> ${serviceReq.appliance} </b> </div>
        <div>Mobile Number  : <b> ${serviceReq.phoneNumber} </b> </div>
        <div>Address : <b> ${serviceReq.address} </b> </div>

      `
    })
  }
  
}
