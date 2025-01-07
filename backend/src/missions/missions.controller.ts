import { Controller, Get } from '@nestjs/common';
import { Mission } from 'src/types/mission';
import { MissionsService } from './missions.service';

@Controller('missions')
export class MissionsController {

    constructor(private readonly missionService: MissionsService){}

    @Get()
    findAll(): Mission[]{
             return this.missionService.findAll();
        }

}
