import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { hash, compare } from 'bcrypt';
import { Model } from 'mongoose';
import { jwtConstand } from 'src/jwt.constansts';
import { LoginAuthDto } from 'src/user/dtos/login-auth.dto';
import { RegisterAuthDto } from 'src/user/dtos/register-auth.dto';
import { User } from 'src/user/schemas/user.schema';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>,
        private jwtService: JwtService
    ) { }

    async register(userObject: RegisterAuthDto) {
        const { password } = userObject
        const plainToHash = await hash(password, 10)
        userObject = { ...userObject, password: plainToHash }
        return this.userModel.create(userObject)
    }

    async login(userObjectLogin: LoginAuthDto) {
        const { email, password } = userObjectLogin
        console.log("🚀 ~ AuthService ~ login ~ userObjectLogin:", userObjectLogin)

        const findUser = await this.userModel.findOne({ email })
        console.log("🚀 ~ AuthService ~ login ~ findUser:", findUser)
        if (!findUser) throw new HttpException('USER_NOT_FOUND', 404)

        const checkPassword = await compare(password, findUser.password)
        if (!checkPassword) throw new HttpException('INCORRECT_PASSWORD', 403)

        const payload = { id: findUser._id, name: findUser.userName }
        const token = this.jwtService.sign(payload)
        const data = {
            user: findUser,
            token
        }
        return data

    }


}
