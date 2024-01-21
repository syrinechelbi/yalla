/* eslint-disable prettier/prettier */
// Importez les modules nécessaires de TypeORM
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Participant } from "./participant.entity";

// Enumération pour représenter les états possibles d'une réservation
enum etat {
  PENDING = "en attente",
  CONFIRMED = "confirmée",
  CANCELED = "annulée",
}

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  idReservation: number;
  
  @ManyToOne(() => Participant, participant => participant.reservations)
  participant: Participant; // Relation avec Participant 

  
  @Column()
  numéro: number;

  @Column({ type: "timestamp" })
  date: Date;

  @Column({
    type: "enum",
    enum: etat,
    default: etat.PENDING,
  })
  état: etat;

  // Date de création de la réservation
  @CreateDateColumn()
  createdAt: Date;

  // Date de mise à jour de la réservation
  @UpdateDateColumn()
  updatedAt: Date;

}
