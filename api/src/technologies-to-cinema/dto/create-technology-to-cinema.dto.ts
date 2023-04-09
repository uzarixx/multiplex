import { IsNumber } from 'class-validator';

export class CreateTechnologyToCinemaDto {
  @IsNumber({allowNaN: false, allowInfinity: false}, {message: 'Is not a number'})
  technologiesId: number
  @IsNumber({allowNaN: false, allowInfinity: false}, {message: 'Is not a number'})
  cinemaId: number
}