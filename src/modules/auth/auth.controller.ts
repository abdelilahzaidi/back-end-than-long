import {Post, Body, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDTO } from 'src/common/dto/auth/signup.dto';
import { UserEntity } from 'src/common/entities/user';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) { }
    //Register a new user
    @Post('register')
    async signUp(@Body() signUpDTO: SignUpDTO): Promise<UserEntity> {
        return await this.authService.signup(
            signUpDTO
        );
    }
}
