import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { LocalisationService } from './localisation.service';
import { AddLocalisationDto } from '../dto/location/Add-localisation.dto';
import { UpdateLocalisationDto } from '../dto/location/Update-localisation.dto';
import { Localisation } from '../entities/localisation.entity';

@Controller('localisation')
export class LocalisationController {
    constructor(private readonly localisationService: LocalisationService) {}

    @Post('/add')
    async addLocalisation(@Body() localisationDto: AddLocalisationDto): Promise<Localisation> {
        return await this.localisationService.addLocalisation(localisationDto);
    }

    @Put('/update/:id')
    async updateLocalisation(
        @Param('id') id: number,
        @Body() localisationDto: UpdateLocalisationDto,
    ): Promise<Localisation> {
        return await this.localisationService.updateLocalisation(id, localisationDto);
    }

    @Delete('/delete/:id')
    async deleteLocalisation(@Param('id') id: number): Promise<void> {
        try {
            await this.localisationService.deleteLocalisation(id);
        } catch (error) {
            if (error instanceof NotFoundException) {
                // Gérer le cas où la localisation n'est pas trouvée
                throw new NotFoundException(`La localisation avec l'ID ${id} n'a pas été trouvée.`);
            }
            // Gérer d'autres erreurs ici si nécessaire
            throw error;
        }
    }

    @Get('/:id')
    async getLocalisation(@Param('id') id: number): Promise<Localisation> {
        return await this.localisationService.getLocalisation(id);
    }

    @Get('/')
    async getAllLocalisations(): Promise<Localisation[]> {
        return await this.localisationService.getLocalisations();
    }
}
