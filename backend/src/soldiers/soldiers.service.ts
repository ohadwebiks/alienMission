import { Injectable, NotFoundException } from '@nestjs/common';
import { Soldier } from 'src/types/soldiers';

@Injectable()
export class SoldiersService {

    private soldiers: Soldier[] = [
        {
            "id": "1",
            "name": "bbbbb",
            "health": 50,
            "energy": 50,
            "temperature": -30,
            "radiation": 5,
            missions: []
          },
          {
            "id": "2",
            "name": "cccc",
            "health": 50,
            "energy": 81,
            "temperature": -30,
            "radiation": 9,
            missions: []
          },
          {
            "id": "3",
            "name": "dddd",
            "health": 30,
            "energy": 20,
            "temperature": -30,
            "radiation": 7,
            missions: []
          },
          {
            "id": "4",
            "name": "eeee",
            "health": 30,
            "energy": 20,
            "temperature": -30,
            "radiation": 7,
            missions: []
          },
          {
            "id": "5",
            "name": "fffff",
            "health": 30,
            "energy": 100,
            "temperature": -30,
            "radiation": 7,
            missions: []
          }
    ]


    findAll(){
        return this.soldiers;
    }

    findOne(id: string){
        const soldier= this.soldiers.find((sol)=>sol.id == id);
        if (!soldier) {
            throw new NotFoundException(`Soldier with ID "${id}" not found.`);
          }
          return soldier;
    }

    create(soldier: Soldier){
        let lastSoldiersId = +(this.soldiers[this.soldiers.length-1].id);
        lastSoldiersId++;
        this.soldiers.push({...soldier,id: lastSoldiersId.toString(),missions: []}); // fix the id
        return soldier;
    }

    update(id: string,soldiersForUpdate: Soldier){
        const soldierIndex = this.soldiers.findIndex((sol)=>sol.id == id);
        if (soldierIndex === -1) {
            throw new NotFoundException(`Soldier with ID "${id}" not found.`);
          }
          
        this.soldiers[soldierIndex] = {...soldiersForUpdate,id};
        return {...soldiersForUpdate,id}
    }

    delete(id: string): Soldier{
        const soldierIndexForDelete = this.soldiers.findIndex((sol)=>sol.id == id);
        if (soldierIndexForDelete === -1) {
            throw new NotFoundException(`Soldier with ID "${id}" not found.`);
          }
        return this.soldiers.splice(soldierIndexForDelete,1)[0];
        
    }
    
}
