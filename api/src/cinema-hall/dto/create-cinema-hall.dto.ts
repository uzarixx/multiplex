import { IsNumber } from 'class-validator';

export class CreateCinemaHallDto {
  @IsNumber({ allowInfinity: false, allowNaN: false }, { message: 'Is not a number' })
  readonly cinemaId: number;
  @IsNumber({ allowInfinity: false, allowNaN: false }, { message: 'Is not a number' })
  readonly hallNumber: number;
}