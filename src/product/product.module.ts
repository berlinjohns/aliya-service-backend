import { Module } from '@nestjs/common';
import { ProductController } from './controller/product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Products, productSchema } from './schemas/product.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Products.name, schema: productSchema }])],
  controllers: [ProductController],
  providers: [ProductService],
 
})
export class ProductModule {}

