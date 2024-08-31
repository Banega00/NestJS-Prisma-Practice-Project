import { IsEmail, IsEnum, IsString } from "class-validator";
import { User } from "../entities/user.entity";
import { Role } from "@prisma/client";

export class CreateUserDto implements Partial<User>{

    @IsEmail()
    email: string;
    
    @IsString()
    name: string;

    @IsString()
    surname: string;

    @IsEnum(Role)
    role: Role;
}
