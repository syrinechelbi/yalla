// participant.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Reservation } from './reservation.entity';

@Entity()
export class Participant {
  @PrimaryGeneratedColumn()
  idParticipant: number;

  @OneToMany(() => Reservation, reservation => reservation.participant)
  reservations: Reservation[];

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  adresse: string;

  @Column({ type: 'date' })
  DN: Date;

  @Column({ type: 'bigint' })
  numTel: number;
}
