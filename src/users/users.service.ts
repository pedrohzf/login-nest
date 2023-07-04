import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Pedro Henrique',
      email: 'pedrohzf@hotmail.com'
    }
  ];

  create(createUserDto: CreateUserDto) {
    const currentMaxID = this.users[this.users.length - 1]?.id || 0;

    const id = currentMaxID + 1;

    const user: User = {
      id,
      ...createUserDto,
    }

    this.users.push(user);

    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user: User) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);

    const updatedUser: User = {
      ...user,
      ...updateUserDto,
    };

    const index = this.users.indexOf(user);

    this.users[index] = updatedUser

    return updatedUser;
  }

  remove(id: number) {
    const deteledUser = this.findOne(id);

    const index = this.users.indexOf(deteledUser);

    this.users.splice(index, 1);
  }
}
