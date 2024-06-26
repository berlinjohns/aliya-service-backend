import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Products {
  @Prop()
  name: string;

  @Prop()
  company: string;

  @Prop()
  price: number;

  @Prop()
  thumbnail: string;

  @Prop()
  details:string[];

  @Prop()
  condition:string;
}

export const productSchema = SchemaFactory.createForClass(Products);
