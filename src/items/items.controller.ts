import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateItemsDto } from './dto/create-items.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  getAll() {
    return this.itemsService.getAllItems();
  }

  @Post()
  create(@Body() createItemsDto: CreateItemsDto) {
    return this.itemsService.createItems(createItemsDto);
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.itemsService.removeItems(id);
  }
}
