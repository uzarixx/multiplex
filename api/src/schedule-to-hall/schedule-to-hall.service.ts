import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ScheduleToHall } from './schedule-to-hall.model';
import { ScheduleService } from '../schedule/schedule.service';
import { CinemaHallService } from '../cinema-hall/cinema-hall.service';
import { CreateScheduleToHallDto } from './dto/create-schedule-to-hall.dto';

@Injectable()
export class ScheduleToHallService {

  constructor(
    @InjectModel(ScheduleToHall) private readonly scheduleToHallRepository: typeof ScheduleToHall,
    private readonly scheduleService: ScheduleService,
    private readonly cinemaHallService: CinemaHallService,
  ) {
  }


  async createScheduleToHall(dto: CreateScheduleToHallDto) {
    await this.scheduleService.findScheduleById(dto.scheduleId);
    await this.cinemaHallService.getCinemaHallById(dto.cinemaHallId);
    return this.scheduleToHallRepository.create(dto);
  }


}
