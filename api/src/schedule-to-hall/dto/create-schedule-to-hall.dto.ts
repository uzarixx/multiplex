import { IsNumber } from 'class-validator';

export class CreateScheduleToHallDto {
  @IsNumber({allowInfinity: false, allowNaN: false}, {message: 'Is not a number'})
  readonly scheduleId: number
  @IsNumber({allowInfinity: false, allowNaN: false}, {message: 'Is not a number'})
  readonly cinemaHallId: number;
}