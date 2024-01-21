/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notification {
    @PrimaryGeneratedColumn()
    idNotification : number;
    @Column()
    libelle : string;
    @Column()
    contenu : string;



}