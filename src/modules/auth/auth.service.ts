import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserEntity } from 'src/common/entities/user';
import { SignUpDTO } from 'src/common/dto/auth/signup.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(

        private userService: UserService,
        //private jwtService: JwtService,
    ) {

    }
    
//Register service
async signup(signUpDto: SignUpDTO): Promise<UserEntity> {
    const { password, password_confirm } = signUpDto;

    if (password !== password_confirm) {
        throw new BadRequestException('Passwords do not match!');
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    try {
        const user = await this.userService.create({
            ...signUpDto,
            password: hashedPassword,
            attributionDate: new Date()
        });

        return user;
    } catch (error) {
        if (error.code = 11000) {
            throw new ConflictException('Duplicate Email!!');
        }
        throw error;
    }
}
}
