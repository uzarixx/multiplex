import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ValidationPipe } from '../pipes/validation.pipe';
import { CreateScheduleDto } from './dto/create-schedule.dto';

@Controller('schedule')
export class ScheduleController {

  constructor(private readonly scheduleService: ScheduleService) {
  }

  @UsePipes(ValidationPipe)
  @Post('/create')
  createSchedule(@Body() dto: CreateScheduleDto) {
    return this.scheduleService.createSchedule({ ...dto});
  }
}
