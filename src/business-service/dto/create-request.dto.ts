import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Category } from '../schemas/business.schma';

export class CreateRequestDto {
  @IsNotEmpty()
  @IsString()
  readonly problem: string;

  @IsNotEmpty()
  @IsString()
  readonly company: string;

  @IsNotEmpty()
  @IsEnum(Category, { message: 'Please enter correct category' })
  readonly category: Category;
}
