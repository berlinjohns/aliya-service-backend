import { Category } from "../schemas/business.schma"


export class UpdateRequestDto {
    readonly problem: string
    readonly company: string
    readonly category:Category
}