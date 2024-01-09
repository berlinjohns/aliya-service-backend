import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Appliance } from '../schemas/business.schma';

export class CreateRequestDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  // @IsNotEmpty()
  // @IsString()
  // readonly problem: string;

  @IsNotEmpty()
  @IsString()
  readonly phoneNumber: string;

  // @IsNotEmpty()
  // @IsString()
  // readonly company: string;

  @IsNotEmpty()
  @IsEnum(Appliance, { message: 'Please enter correct category' })
  readonly appliance: Appliance;

  @IsNotEmpty()
  @IsString()
  readonly address: string;

}
