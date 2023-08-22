import { IsBoolean, IsDate, IsEmail, IsIn, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";
import { UserGender } from "src/common/enums/gender.enum";
import { UserStatus } from "src/common/enums/status.enum";

export class SignUpDTO {
    @IsNotEmpty()
    first_name: string;
  
    @IsNotEmpty()
    last_name: string;
  
    @IsNotEmpty()
    @IsEmail({}, { message: 'Please enter correct email address' })
    email: string;
  
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/, {
      message:
        'password too weak, include in your password a special character and capital letter',
    })
    password: string;
  
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/, {
      message:
        'password too weak, include in your password a special character and capital letter',
    })
    password_confirm: string;
  
    @IsNotEmpty()
    @IsIn(['member', 'admin'], { message: 'Invalid status' }) // Utilisation de @IsIn pour vérifier les valeurs autorisées
    status: UserStatus;

    @IsNotEmpty()
    @IsIn(['male', 'female'], { message: 'Invalid status' })  
    @IsNotEmpty()
    gender: UserGender;
  
    @IsNotEmpty()
    birthDate: Date;
  
    @IsNotEmpty()
    adress: string;
  
    @IsNotEmpty()
    @IsBoolean()
    actif: boolean;
  
    @IsNotEmpty()
    gsm: string;
  }