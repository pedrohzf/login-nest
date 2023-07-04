import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(16)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password not strong enough',
    })
    password: string;
}
