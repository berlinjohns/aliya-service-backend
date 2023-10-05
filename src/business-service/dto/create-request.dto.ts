import { Category } from "../schemas/business.schma"


export class CreateRequestDto {
    readonly problem: string
    readonly company: string
    readonly category:Category
}