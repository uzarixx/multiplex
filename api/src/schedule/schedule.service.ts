import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Schedule } from './schedule.model';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { CinemaService } from '../cinema/cinema.service';
import { NotFoundException } from '../exceptions/httpExceptions/notFound.exception';

@Injectable()
export class ScheduleService {

  constructor(@InjectModel(Schedule) private readonly scheduleRepository: typeof Schedule, private readonly cinemaService: CinemaService) {
  }

  async createSchedule(dto: CreateScheduleDto) {
    await this.cinemaService.findCinemaById(dto.cinemaId);
    return this.scheduleRepository.create(dto);
  }

  async findScheduleById(id: number) {
    const schedule = await this.scheduleRepository.findOne({where: {id}})
    if (!schedule) {
      throw new NotFoundException('Schedule is not exist')
    }
    return schedule;
  }

}
