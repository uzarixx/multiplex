import { IsBoolean, IsNumber } from 'class-validator';

export class CreateHallPlaceDto {
  @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Is not a number' })
  cinemaHallId: number;
  @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Is not a number' })
  row: number;
  @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Is not a number' })
  place: number;
  @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Is not a number' })
  price: number;
  @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Is not a number' })
  xPosition: number;
  @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Is not a number' })
  yPosition: number;
  @IsBoolean({ message: 'Is not a boolean' })
  isLux: boolean;
  @IsBoolean({ message: 'Is not a boolean' })
  isAvailable: boolean;
  @IsBoolean({ message: 'Is not a boolean' })
  isInvalid: boolean;
}