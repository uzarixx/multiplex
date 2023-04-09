import { IsNumber, IsString } from 'class-validator';

export class CreateCinemaDto {
  @IsString({message: 'Is not a string'})
  readonly name: string;
  @IsString({message: 'Is not a string'})
  readonly address: string;
  @IsNumber({allowInfinity: false, allowNaN: false}, {message: 'Is not a string'})
  readonly cityId: number;
}