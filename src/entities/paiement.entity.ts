/* eslint-disable prettier/prettier */

import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Facture } from "./facture.entity";

@Entity('paiement')
export class Paiement {
    @PrimaryGeneratedColumn()
    idPaiement : number;
    @Column()
    montant : string;
    @Column()
    date : Date;
    @OneToOne(() => Facture, facture => facture.paiement)
    @JoinColumn()
    facture: Facture;
}