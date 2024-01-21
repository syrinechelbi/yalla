// update-localisation.dto.ts

import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

export class UpdateLocalisationDto {
  @IsOptional()
  @IsNotEmpty({ message: 'Le champ "ville" est obligatoire.' })
  @IsString({ message: 'Le champ "ville" doit être une chaîne de caractères.' })
  ville?: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Le champ "rue" est obligatoire.' })
  @IsString({ message: 'Le champ "rue" doit être une chaîne de caractères.' })
  rue?: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Le champ "codePostal" est obligatoire.' })
  @IsInt({ message: 'Le champ "codePostal" doit être un nombre entier.' })
  codePostal?: number;
}
