import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class UpdateUserDto {
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    userName?: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    password?: string;
}