/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('paiement')
export class Paiement {
    @PrimaryGeneratedColumn()
    idPaiement : number;
    @Column()
    montant : string;
    @Column()
    date : Date;



}