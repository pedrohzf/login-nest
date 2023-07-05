import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { UserToken } from './model/UserToken';
import { UnauthorizedError } from 'src/errors/UnauthorizedError';
import { UserPayload } from './model/UserPayload';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UsersService
    ) {

    }

    async login(email: string, password: string): Promise<UserToken> {
        const user: User = await this.validateUser(email, password)

        const payload: UserPayload = {
            username: user.email,
            sub: user.id
        }

        return {
            accessToken: this.jwtService.sign(payload)
        }
    }

    private async validateUser(email: string, password: string) {
        const user = await this.userService.findByEmail(email)

        if (user) {
            const isValidPassword = await bcrypt.compare(password, user.password)

            if (isValidPassword) {
                return {
                    ...user,
                    password: undefined
                }
            }
        }

        throw new UnauthorizedError(
            'Incorrect email or password'
        )
    }
}
