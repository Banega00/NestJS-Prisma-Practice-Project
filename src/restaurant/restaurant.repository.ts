import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
import { Restaurant } from "./entities/restaurant.entity";

@Injectable()
export class RestaurantRepository extends PrismaClient {

    constructor() {
        super();
    }

    async create(data: Prisma.RestaurantCreateInput): Promise<Restaurant> {

        return this.restaurant.create({ data });
    }

    async findAllRestaurants(): Promise<Restaurant[]> {
        return this.restaurant.findMany();
    }

    async findRestaurantById(id: Restaurant['id']) {
        const restaurant: Restaurant | null = await this.restaurant.findUnique({ where: { id } });
        return restaurant;
    }

    async updateRestaurant(id, data) {
        return this.restaurant.update({ where: { id }, data });
    }

    async deleteRestaurant(id) {
        return this.restaurant.delete({ where: { id } });
    }
}