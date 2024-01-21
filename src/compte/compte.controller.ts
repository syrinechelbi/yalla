// compte.controller.ts
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { CompteService } from './compte.service';
import { AddCompteDto } from '../dto/compte/Add-compte.dto';
import { UpdateCompteDto } from '../dto/compte/Update-compte.dto';
import { Compte } from '../entities/compte.entity';

@Controller('compte')
export class CompteController {
    constructor(private readonly compteService: CompteService) {}

    @Post('/add')
    async addCompte(@Body() compteDto: AddCompteDto): Promise<Compte> {
        return await this.compteService.addCompte(compteDto);
    }

    @Patch('/update/:id')
    async updateCompte(@Param('id') id: number, @Body() compteDto: UpdateCompteDto): Promise<Compte> {
        return await this.compteService.updateCompte(id, compteDto);
    }

    @Get('/:id')
    async getCompteById(@Param('id') id: number): Promise<Compte> {
        return await this.compteService.getCompteById(id);
    }

    @Get('/all')
    async getAllComptes(): Promise<Compte[]> {
        return await this.compteService.getAllComptes();
    }

    @Delete('/delete/:id')
    async deleteCompte(@Param('id') id: number): Promise<void> {
        return await this.compteService.deleteCompte(id);
    }
}
