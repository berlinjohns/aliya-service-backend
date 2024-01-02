import { IsNotEmpty, IsString,IsNumber } from 'class-validator';


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

}

