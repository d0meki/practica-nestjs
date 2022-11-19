import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ItemsService {

  constructor(
    @InjectRepository(Item)
    private usersRepository: Repository<Item>,
  ) {}
  create(createItemDto: CreateItemDto) {
    return 'This action adds a new item';
  }

  findAll(): Promise<Item[]> {
    return this.usersRepository.find();
  }
  // findAll(): string {
  //   return "esta funionando";
  // }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
