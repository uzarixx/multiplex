import { Body, Controller, Get, Param, Post, Query, UsePipes } from '@nestjs/common';
import { CinemaHallService } from './cinema-hall.service';
import { ValidationPipe } from '../pipes/validation.pipe';
import { CreateCinemaHallDto } from './dto/create-cinema-hall.dto';
import { CinemaHallPlaces } from '../cinema-hall-places/cinema-hall-places.model';


interface CinemaHallPlaceWithBooking extends CinemaHallPlaces {
  booked: boolean;
}

@Controller('cinema-hall')
export class CinemaHallController {

  constructor(private readonly cinemaHallService: CinemaHallService) {
  }

  @UsePipes(ValidationPipe)
  @Post('/create')
  createCinemaHall(@Body() dto: CreateCinemaHallDto) {
    return this.cinemaHallService.createCinemaHall(dto);
  }

  @Get('/get-cinema-hall/:id')
  getCinemaById(@Param('id') id: number) {
    return this.cinemaHallService.getCinemaHallById(id);
  }

  @Get('/get-cinema-hall-places/:id')
  getCinemaHallPlaces(@Param('id') id: number, @Query('date') date: string): Promise<CinemaHallPlaceWithBooking[]> {
    return this.cinemaHallService.getCinemaHallPlaces(id, date);
  }


}
