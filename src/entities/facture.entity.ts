/* eslint-disable prettier/prettier */

import { Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Paiement } from "./paiement.entity";

@Entity('facture')
export class Facture {
    @PrimaryGeneratedColumn()
    idFacture : number;
    @OneToOne(() => Paiement, paiement => paiement.facture)
    paiement: Paiement;

}