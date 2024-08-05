import { Controller, Get, Post, Body, ValidationPipe, Put, Delete, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user-dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiBearerAuth()
@ApiTags('users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('create')
    async create(@Body(new ValidationPipe()) createuser: CreateUserDto) {

        return this.userService.create(createuser)
    }
    @Put(':id')
    async update(@Param('id') id: string, @Body(new ValidationPipe()) updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto)
    }
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return this.userService.findAll()
    }
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.userService.findOne(id)
    }
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.userService.delete(id)
    }


}
