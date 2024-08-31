import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { RestaurantRepository } from './restaurant.repository';
import { ulid } from 'ulid';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantService {

  constructor(private readonly restaurantRepository: RestaurantRepository) {
    
  }

  async create(createRestaurantDto: CreateRestaurantDto) {
    const restaurant = await this.restaurantRepository.create({id: ulid(), ...createRestaurantDto});
    return restaurant;
  }

  findAll() {
    return this.restaurantRepository.findAllRestaurants();
  }

  async findOne(id: Restaurant['id']) {
    return await this.restaurantRepository.findRestaurantById(id);
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
