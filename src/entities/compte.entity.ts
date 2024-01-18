/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('compte')
export class Compte {
    @PrimaryGeneratedColumn()
    idCompte : number;
    @Column({length: 20 , unique:true})
    username : string;
    @Column({unique:true})
    email : string;
    @Column({length: 50})
    password : string;


}