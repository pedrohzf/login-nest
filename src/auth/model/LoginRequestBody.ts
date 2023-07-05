import { IsEmail, IsString, MinLength, MaxLength, Matches } from 'class-validator';


export class LoginRequestBody {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(16)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password not strong enough',
    })
    password: string
}
