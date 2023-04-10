import { IsNumber, IsString } from 'class-validator';

export class CreateCinemaHallPlaceBookingDto {
  @IsNumber({ allowInfinity: false, allowNaN: false }, { message: 'Is not a number' })
  placeId: number;
  @IsString({ message: 'Is not a date' })
  bookingTime: string;
}