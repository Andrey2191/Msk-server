import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemsDto } from './dto/create-items.dto';
import { Items, ItemsDocument } from './items.schema';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Items.name) private itemsModel: Model<ItemsDocument>,
  ) {}

  async createItems(createItemsDto: CreateItemsDto) {
    const items = await this.itemsModel.create(createItemsDto);
    return items;
  }

  async getAllItems() {
    const items = await this.itemsModel.find().exec();
    return items;
  }

  async removeItems(id: string) {
    return this.itemsModel.findByIdAndDelete(id);
  }
}
