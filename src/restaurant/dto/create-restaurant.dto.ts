import { IsString } from "class-validator";
import { Restaurant } from "../entities/restaurant.entity";

export class CreateRestaurantDto implements Omit<Restaurant, 'id'>{

    @IsString()
    name: string;

    @IsString()
    city: string;

}
