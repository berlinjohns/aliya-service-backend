import { IsNotEmpty, IsString,IsNumber, IsOptional } from 'class-validator';


export class UpdateProductDto{
    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly company: string;

    @IsOptional()
    @IsNumber()
    readonly price: number;

    @IsOptional()
    @IsNumber()
    readonly thumbnail: string;

}