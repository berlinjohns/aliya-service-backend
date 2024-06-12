import { IsNotEmpty, IsString,IsNumber, IsArray } from 'class-validator';


export class CreateProductDto{
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly company: string;

    @IsNotEmpty()
    @IsNumber()
    readonly price: number;

    @IsNotEmpty()
    @IsString()
    readonly thumbnail: string;

    @IsArray()
    readonly details:string[];

    @IsNotEmpty()
    @IsString()
    readonly condition:string;

}

