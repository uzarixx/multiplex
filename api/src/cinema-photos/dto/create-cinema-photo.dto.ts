import { IsNumber, IsString } from 'class-validator';

export class CreateCinemaPhotoDto {
  @IsNumber({allowInfinity: false, allowNaN: false}, {message: 'Is not a number'})
  readonly cinemaId: number;
  @IsString({message: 'Is not a string'})
  readonly imageLink: string;
}