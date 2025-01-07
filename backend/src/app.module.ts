import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoldiersModule } from './soldiers/soldiers.module';
import { MissionsModule } from './missions/missions.module';

@Module({
  imports: [SoldiersModule, MissionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
