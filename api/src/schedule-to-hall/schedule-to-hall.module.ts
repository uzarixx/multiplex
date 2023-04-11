import { Module } from '@nestjs/common';
import { ScheduleToHallService } from './schedule-to-hall.service';
import { ScheduleToHallController } from './schedule-to-hall.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ScheduleToHall } from './schedule-to-hall.model';
import { ScheduleModule } from '../schedule/schedule.module';
import { CinemaHallModule } from '../cinema-hall/cinema-hall.module';

@Module({
  providers: [ScheduleToHallService],
  controllers: [ScheduleToHallController],
  imports: [SequelizeModule.forFeature([ScheduleToHall]), ScheduleModule, CinemaHallModule]
})
export class ScheduleToHallModule {}
