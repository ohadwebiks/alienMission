import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { SoldiersService } from './soldiers.service';
import { Soldier } from 'src/types/soldiers';

@Controller('soldiers')
export class SoldiersController {

    constructor(private readonly soldiersService: SoldiersService){}

    @Get()
    findAll(): Soldier[]{
        return this.soldiersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string): Soldier{
        const soldier = this.soldiersService.findOne(id);
        return soldier;
    }

    @Post() // /soldiers
    create(@Body() soldier: Soldier){
         const newSoldier = this.soldiersService.create(soldier);
         return newSoldier;
    }

    @Patch(':id') // /soldiers/:id
    update(@Param('id') id: string, @Body() soldiersForUpdate: Soldier){
        this.soldiersService.update(id,soldiersForUpdate);
        return soldiersForUpdate;
    }

    @Delete(':id') // soldiers/:id
    delete(@Param('id') id: string){
        return this.soldiersService.delete(id);
    }

}
