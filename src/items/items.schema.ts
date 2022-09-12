import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemsDocument = Items & Document;

@Schema()
export class Items {
  @Prop()
  title: string;

  @Prop()
  price: number;
}

export const ItemsSchema = SchemaFactory.createForClass(Items);
