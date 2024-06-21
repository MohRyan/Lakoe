import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Role } from '../entities/auth.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @MinLength(6)
  password: string;

  role: Role;
}
