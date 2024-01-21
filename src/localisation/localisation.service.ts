import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Localisation } from '../entities/localisation.entity';
import { AddLocalisationDto } from '../dto/location/Add-localisation.dto';
import { UpdateLocalisationDto } from '../dto/location/Update-localisation.dto';

@Injectable()
export class LocalisationService {
    constructor(
        @InjectRepository(Localisation)
        private localisationRepository: Repository<Localisation>,
    ) {}
     /*-------------------------------------------------------*/
    async addLocalisation(localisation: AddLocalisationDto): Promise<Localisation> {
        return await this.localisationRepository.save(localisation);
    }
     /*-------------------------------------------------------*/
    async updateLocalisation(id: number, localisation: UpdateLocalisationDto): Promise<Localisation> {
        const updatedLocalisation = await this.localisationRepository.preload({
            idLocalisation: id,
            ...localisation,
        });
    
        if (!updatedLocalisation) {
            throw new NotFoundException(`La localisation d'ID ${id} n'existe pas dans la base de données.`);
        }
    
        return await this.localisationRepository.save(updatedLocalisation);
    }
     /*-------------------------------------------------------*/
    

    async deleteLocalisation(id: number): Promise<void> {
        const localisation = await this.localisationRepository.preload({
            idLocalisation: id,
        });
        if (!localisation) {
            throw new NotFoundException(`La localisation avec l'ID ${id} n'a pas été trouvée.`);
        }

        await this.localisationRepository.remove(localisation);
    }

     /*-------------------------------------------------------*/
    async getLocalisations(): Promise<Localisation[]> {
        return await this.localisationRepository.find();
    }
    /*-------------------------------------------------------*/

    async getLocalisation(id: number): Promise<Localisation> {
        const localisation = await this.localisationRepository.preload({
            idLocalisation: id,
        });
        if (!localisation) {
            throw new NotFoundException(`La localisation d'ID ${id} n'existe pas dans la base de données.`);
        }

        return localisation;
    }
 
}
