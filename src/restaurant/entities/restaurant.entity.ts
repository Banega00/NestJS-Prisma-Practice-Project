import { User as PrismaUser } from '.prisma/client';

export interface User extends PrismaUser{
    id: string;
    email: string;
    name: string;
    surname: string;
}