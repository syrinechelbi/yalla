/* eslint-disable prettier/prettier */

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('notification')
export class Notification {
    @PrimaryGeneratedColumn()
    idNotification : number;
    @Column()
    libelle : string;
    @Column()
    contenu : string;
    @CreateDateColumn()
    createdAt: Date;
 
    @UpdateDateColumn()
    updatedAt: Date;



}