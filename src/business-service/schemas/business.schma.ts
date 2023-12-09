import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
    FRIDGE="Fridge",
    AV = "Ac"
}

@Schema({
    timestamps: true,
})
export class serviceRequest{
    @Prop()
    problem: string;

    @Prop()
    company: string;

    @Prop()
    category:Category
}

export const businessServiceSchema = SchemaFactory.createForClass(serviceRequest);