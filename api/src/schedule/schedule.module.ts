import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Schedule } from './schedule.model';
import { CinemaModule } from '../cinema/cinema.module';

@Module({
  providers: [ScheduleService],
  controllers: [ScheduleController],
  imports: [SequelizeModule.forFeature([Schedule]), CinemaModule],
  exports: [ScheduleService],
})
export class ScheduleModule {
}
