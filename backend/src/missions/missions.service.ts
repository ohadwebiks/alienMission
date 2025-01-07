import { Injectable } from '@nestjs/common';
import { Mission, Status } from 'src/types/mission';

@Injectable()
export class MissionsService {
  private missions: Mission[] = [
    {
      id: '1',
      name: 'mission1',
      status: Status.pending,
      planet: 'moon',
      description: 'aaa c scasjl asdsa',
      soldiers: '1',
    },
    {
      id: '2',
      name: 'mission2',
      status: Status.completed,
      planet: 'moon',
      description: 'aaa c scasjl asdsa',
      soldiers: '1',
    },
    {
      id: '3',
      name: 'mission3',
      status: Status.inProgress,
      planet: 'earth',
      description: 'sadsadl asdsl; l,a;sd,; ,l;,;l kkkkkkkkkkkkkkkkkkkkkkk sadsak adsdas',
      soldiers: '2',
    },
    {
      id: '4',
      name: 'mission4',
      status: Status.inProgress,
      planet: 'galaxy',
      description: 'sadassa sadsa asds asdsad adsadsd',
      soldiers: '',
    },
  ];

  findAll() {
    return this.missions;
  }
}
