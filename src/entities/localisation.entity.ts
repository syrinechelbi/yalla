

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Localisation {
  @PrimaryGeneratedColumn()
  idLocalisation: number;

  @Column()
  ville: string;

  @Column()
  rue: string;

  @Column()
  codePostal: number;

}
