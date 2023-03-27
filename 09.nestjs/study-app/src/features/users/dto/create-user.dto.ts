// Import core libraries
import { IsNotEmpty, MinLength, Matches, IsEmail } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string

  @IsNotEmpty()
  @MinLength(3)
  lastName: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
    message: 'Password is not strong enough',
  })
  password: string
}
