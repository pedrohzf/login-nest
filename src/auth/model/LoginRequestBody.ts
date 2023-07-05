import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, MaxLength, Matches } from 'class-validator';


export class LoginRequestBody {
    @ApiProperty()
    @IsEmail()
    email: string;


    @ApiProperty()
    @IsString()
    @MinLength(4)
    @MaxLength(16)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password not strong enough',
    })
    password: string
}
