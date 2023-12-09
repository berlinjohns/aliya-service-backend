import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductService } from '../product.service';
import { Products } from '../schemas/product.schema';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getAllProducts(@Query() query: ExpressQuery): Promise<Products[]> {
    return this.productService.findAllProducts(query);
  }

  @Get(':id')
  async getProductById(
    @Param('id')
    id:string,
  ): Promise<Products>{
    return this.productService.findById(id);
  };

  @Post('create')
  async createProduct(
    @Body()
    product: CreateProductDto,
  ): Promise<Products> {
    return this.productService.createProduct(product);
  }

  @Put(':id')
  async updateProduct(
    @Param('id')
    id: string,
    @Body()
    product: UpdateProductDto,
  ):Promise<Products> {
    return this.productService.updateById(id, product);
  }

  @Delete(':id')
  async deleteProduct(
    @Param(':id')
    id:string
  ): Promise<Products>{
    return this.productService.deleteById(id);
  }
  
}
