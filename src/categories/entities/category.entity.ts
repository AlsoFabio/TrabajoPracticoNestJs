import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoriesDocument = HydratedDocument<Category>;

@Schema()
export class Category/* Este nombre va en singular */ {

    @Prop({required: true})
    categories_name:string
    @Prop({required: true})
    categories_description:string
}

export const CategoriesSchema = SchemaFactory.createForClass(Category);