import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from 'src/user/dtos/register-auth.dto';
import { LoginAuthDto } from 'src/user/dtos/login-auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }


    @Post('register')
    registerUser(@Body() userObject: RegisterAuthDto) {
        return this.authService.register(userObject)
    }

    @Post('login')
    loginUser(@Body() userObjectLogin: LoginAuthDto) {
        return this.authService.login(userObjectLogin)
    }

}
