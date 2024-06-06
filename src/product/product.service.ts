import { Injectable, NotFoundException } from '@nestjs/common';
import mongoose from 'mongoose';
import { Products } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Query  } from 'express-serve-static-core';
import { CreateProductDto } from './dto/create-product.dto';


@Injectable()
export class ProductService {
   
    constructor(
        @InjectModel(Products.name)
        private productModel:mongoose.Model<Products>,

    ) {
    }

    async findAllProducts(query: Query): Promise<Products[]> {
        const resPerPage = 10
        const currentPage = Number(query.page) || 1
        const skip =resPerPage* (currentPage-1)
        const category = query.category ? {
          category: {
            $regex: query.category,
            $options:'i'
          }
        }:{}
        const serviceRequestes = await this.productModel.find({ ...category }).limit(resPerPage).skip(skip);
        return serviceRequestes;
      }
    
      async createProduct(request: Products): Promise<Products> {
        const Product = await this.productModel.create(request);
        return Product;
      }
    
      async findById(id: string): Promise<Products> {
        const Products = await this.productModel.findById(id);
        if (!Products) {
          throw new NotFoundException(
            'The Service Product with the given ID not Found',
          );
        }
        return Products;
      }
    
      async updateById(
        id: string,
        Products: Products,
      ): Promise<Products> {
        return await this.productModel.findByIdAndUpdate(
          id,
          Products,
          {
            new: true,
            runValidators: true,
          },
        );
      }
        
      async deleteById(
        id: string,
      ): Promise<Products> {
        return await  this.productModel.findByIdAndDelete(id)
      }
}
