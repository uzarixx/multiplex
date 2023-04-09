import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { ValidationPipe } from '../pipes/validation.pipe';

@Controller('cinema')
export class CinemaController {
  constructor(private readonly cinemaService: CinemaService) {
  }

  @UsePipes(ValidationPipe)
  @Post('/create')
  createCinema(@Body() dto: CreateCinemaDto) {
    return this.cinemaService.createCinema(dto);
  }

  @Get('/get-cinema-by-id/:id')
  getCinemaById(@Param('id') id: number) {
    return this.cinemaService.findCinemaById(id);
  }

}
