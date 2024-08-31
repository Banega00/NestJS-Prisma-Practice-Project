import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
import { User } from "./entities/user.entity";

@Injectable()
export class UserRepository extends PrismaClient {

    constructor() {
        super();
    }

    async create(data: Prisma.UserCreateInput): Promise<User> {

        return this.user.create({ data });
    }

    async findAllUsers(): Promise<User[]> {
        return this.user.findMany();
    }

    async findUserById(id) {
        return this.user.findUnique({ where: { id } });
    }

    async updateUser(id, data) {
        return this.user.update({ where: { id }, data });
    }

    async deleteUser(id) {
        return this.user.delete({ where: { id } });
    }
}