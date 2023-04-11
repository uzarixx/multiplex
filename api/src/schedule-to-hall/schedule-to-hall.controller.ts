import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ScheduleToHallService } from './schedule-to-hall.service';
import { ValidationPipe } from '../pipes/validation.pipe';
import { CreateScheduleToHallDto } from './dto/create-schedule-to-hall.dto';

@Controller('schedule-to-hall')
export class ScheduleToHallController {

  constructor(private readonly scheduleToHallService: ScheduleToHallService) {
  }

  @UsePipes(ValidationPipe)
  @Post('/create')
  createScheduleToHall(@Body() dto: CreateScheduleToHallDto) {
    return this.scheduleToHallService.createScheduleToHall(dto);
  }
}
