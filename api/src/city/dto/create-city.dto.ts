import { IsString } from 'class-validator';

export class CreateCityDto {
  @IsString({ message: 'Is not a string' })
  readonly name: string;
}