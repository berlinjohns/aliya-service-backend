import { IsNotEmpty, IsString,IsNumber, IsOptional, IsArray,} from 'class-validator';


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
    @IsString()
    readonly thumbnail: string;

    @IsArray()
    readonly details:string[];

    @IsNotEmpty()
    @IsString()
    readonly condition:string;
}