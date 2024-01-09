import { IsEnum,IsEmail,IsOptional, IsString } from "class-validator"
import { Appliance } from "../schemas/business.schma"


export class UpdateRequestDto {
    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsEmail()
    readonly email: string;
    
    @IsOptional()
    @IsString()
    readonly phoneNumber: string;
  

    // @IsOptional()
    // @IsString()
    // readonly problem: string
    // @IsOptional()
    // @IsString()
    // readonly company: string

    @IsOptional()
    @IsEnum(Appliance, { message: 'Please enter correct category' })
    readonly appliance:Appliance;

    @IsOptional()
    @IsString()
    readonly address: string;

}