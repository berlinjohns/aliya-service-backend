import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Appliance {
    FRIDGE="Fridge",
    AC = "Ac"
}

@Schema({
    timestamps: true,
})
export class serviceRequest{

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    phoneNumber: string;

    // @Prop()
    // problem: string;

    // @Prop()
    // company: string;

    @Prop({ required: true, enum: Appliance })
    appliance: Appliance;

    @Prop()
    address: string;
}

export const businessServiceSchema = SchemaFactory.createForClass(serviceRequest);