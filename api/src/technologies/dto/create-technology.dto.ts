import { IsString } from 'class-validator';

export class CreateTechnologyDto {
  @IsString({ message: 'Is not a string' })
  name: string;
  @IsString({ message: 'Is not a string' })
  description: string;
  @IsString({ message: 'Is not a string' })
  imageLink: string;
}