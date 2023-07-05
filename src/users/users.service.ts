import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const data: Prisma.UserCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 11)
    };

    const createdUser = await this.prisma.user.create({ data })

    return {
      ...createdUser,
      password: undefined
    }
  }

  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id }
    })
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email }
    })
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    const data: Prisma.UserUpdateInput = {
      ...dto,
    }

    return this.prisma.user.update({
      where: { id },
      data,
    })
  }

  async remove(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    })
  }
}
