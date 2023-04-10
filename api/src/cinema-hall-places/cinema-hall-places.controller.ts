import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { CinemaHallPlacesService } from './cinema-hall-places.service';
import { ValidationPipe } from '../pipes/validation.pipe';
import { CreateHallPlaceDto } from './dto/create-hall-place.dto';

@Controller('cinema-hall-places')
export class CinemaHallPlacesController {

  constructor(private readonly cinemaHallPlacesService: CinemaHallPlacesService) {
  }

  @UsePipes(ValidationPipe)
  @Post('/create')
  createHallPlace(@Body() dto: CreateHallPlaceDto) {
    return this.cinemaHallPlacesService.createHallPlace(dto);
  }

}