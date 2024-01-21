import { IsNotEmpty, Length, IsInt } from 'class-validator';

export class AddLocalisationDto {
  @IsNotEmpty({ message: 'Le champ "ville" est obligatoire.' })
  @Length(3, 50, { message: 'Le champ "ville" doit avoir entre 3 et 50 caractères.' })
  ville: string;

  @IsNotEmpty({ message: 'Le champ "rue" est obligatoire.' })
  @Length(5, 100, { message: 'Le champ "rue" doit avoir entre 5 et 100 caractères.' })
  rue: string;

  @IsNotEmpty({ message: 'Le champ "codePostal" est obligatoire.' })
  @IsInt({ message: 'Le champ "codePostal" doit être un nombre entier.' })
  codePostal: number;
}
