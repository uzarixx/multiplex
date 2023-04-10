import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { CinemaHallPlacesBookingService } from './cinema-hall-places-booking.service';
import { ValidationPipe } from '../pipes/validation.pipe';
import { CreateCinemaHallPlaceBookingDto } from './dto/create-cinema-hall-place-booking.dto';

@Controller('cinema-hall-places-booking')
export class CinemaHallPlacesBookingController {

  constructor(private readonly cinemaHallPlacesBookingService: CinemaHallPlacesBookingService) {
  }

  @UsePipes(ValidationPipe)
  @Post('/create')
  createCinemaHallPlaceBooking(@Body() dto: CreateCinemaHallPlaceBookingDto) {
    return this.cinemaHallPlacesBookingService.createCinemaHallPlaceBooking(dto);
  }


}
