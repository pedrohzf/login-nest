import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { User } from "../entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto extends User {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'Password must have between 4-16 characters and at least one simble',
        example: 'Omg@123'
    })
    @IsString()
    @MinLength(4)
    @MaxLength(16)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password not strong enough',
    })
    password: string;
}
