// Import core libraries
import {
  IsNotEmpty,
  IsOptional,
  MinLength,
  Matches,
  IsEmail,
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3, { message: '' })
  @ApiProperty()
  name: string

  @IsOptional()
  @MinLength(3)
  lastName?: string

  @IsNotEmpty()
  @IsEmail()
  email: string //edgar@example.com

  @ApiProperty({
    description:
      'Should have at least 1 uppercase, 1 number and 1 special char',
  })
  @IsNotEmpty()
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
    message: 'Password is not strong enough',
  })
  password: string
}
