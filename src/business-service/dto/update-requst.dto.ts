import { IsEnum, IsOptional, IsString } from "class-validator"
import { Category } from "../schemas/business.schma"


export class UpdateRequestDto {
    @IsOptional()
    @IsString()
    readonly problem: string
    @IsOptional()
    @IsString()
    readonly company: string
    @IsOptional()
    @IsEnum(Category, { message: 'Please enter correct category' })
    readonly category:Category
}