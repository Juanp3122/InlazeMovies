import { IsEmail, maxLength, MinLength, MaxLength } from "class-validator";


export class LoginAuthDto {

    @IsEmail()
    email: string;

    @MinLength(4)
    @MaxLength(12)
    password: string


}
