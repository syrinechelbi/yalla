/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCompteDto {
  @IsString()
  @IsNotEmpty({
    message: 'Le nom d utilisateur est obligatoire'
  })
  @MaxLength(20)
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, {
    message: 'La taille minimale du mot de passe est de 8 caractère'
  }) 
  @MaxLength(50)
  password: string;
}
