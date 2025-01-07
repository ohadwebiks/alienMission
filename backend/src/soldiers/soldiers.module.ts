import { Module } from '@nestjs/common';
import { SoldiersService } from './soldiers.service';
import { SoldiersController } from './soldiers.controller';

@Module({
  providers: [SoldiersService],
  controllers: [SoldiersController]
})
export class SoldiersModule {}
