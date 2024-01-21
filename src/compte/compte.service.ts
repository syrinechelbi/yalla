// compte.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compte } from '../entities/compte.entity';
import { AddCompteDto } from '../dto/compte/Add-compte.dto';
import { UpdateCompteDto } from '../dto/compte/Update-compte.dto';

@Injectable()
export class CompteService {
    constructor(
        @InjectRepository(Compte)
        private compteRepository: Repository<Compte>,
    ) {}

    async addCompte(compteDto: AddCompteDto): Promise<Compte> {
        const { username, email, password } = compteDto;

        const existingCompte = await this.compteRepository.findOne({ where: [{ username }, { email }] });
        if (existingCompte) {
            throw new Error('Un compte avec ce nom d\'utilisateur ou cette adresse email existe déjà.');
        }

        const compte = this.compteRepository.create({
            username,
            email,
            password,
        });

        return await this.compteRepository.save(compte);
    }

    async updateCompte(id: number, compteDto: UpdateCompteDto): Promise<Compte> {
        const existingCompte = await this.compteRepository.preload({
            idCompte:id,
            ...Compte,
        });
        if (!existingCompte) {
            throw new NotFoundException(`Le compte d'ID ${id} n'existe pas.`);
        }

        // Merge les modifications avec le compte existant
        const updatedCompte = this.compteRepository.merge(existingCompte, compteDto);

        return await this.compteRepository.save(updatedCompte);
    }

    async getCompteById(id: number): Promise<Compte> {
        const compte = await this.compteRepository.preload({
            idCompte: id,
        });
        if (!compte) {
            throw new NotFoundException(`Le compte d'ID ${id} n'existe pas.`);
        }

        return compte;
    }

    async getAllComptes(): Promise<Compte[]> {
        return await this.compteRepository.find();
    }

    async deleteCompte(id: number): Promise<void> {
        const compte = await this.compteRepository.preload({
            idCompte: id,
        });
        if (!compte) {
            throw new NotFoundException(`Le compte d'ID ${id} n'existe pas.`);
        }

        await this.compteRepository.remove(compte);
    }
}
