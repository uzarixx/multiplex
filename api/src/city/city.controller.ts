import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { ValidationPipe } from '../pipes/validation.pipe';

@Controller('city')
export class CityController {

  constructor(private readonly cityService: CityService) {
  }

  @UsePipes(ValidationPipe)
  @Post('/create')
  createCity(@Body() dto: CreateCityDto) {
    return this.cityService.createCity(dto);
  }


  @Get('/get-cinema-by-city/:id')
  getCinemaByCity(@Param('id') id: number) {
    return this.cityService.getCinemaByCity(id);
  }


}
