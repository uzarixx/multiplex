import { IsNumber, IsString } from 'class-validator';

export class CreateScheduleDto {
  @IsString({ message: 'Is not a string' })
  date: string;
  @IsString({ message: 'Is not a string' })
  time: string;
  @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Is not a number' })
  cinemaId: number;
  @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Is not a number' })
  filmId: number;
}