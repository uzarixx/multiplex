import { Body, Controller, Delete, Param, Post, UsePipes } from '@nestjs/common';
import { CinemaPhotosService } from './cinema-photos.service';
import { CreateCinemaPhotoDto } from './dto/create-cinema-photo.dto';
import { ValidationPipe } from '../pipes/validation.pipe';

@Controller('cinema-photos')
export class CinemaPhotosController {

  constructor(private readonly cinemaPhotosService: CinemaPhotosService) {
  }

  @UsePipes(ValidationPipe)
  @Post('/create')
  createCinemaPhoto(@Body() dto: CreateCinemaPhotoDto) {
    return this.cinemaPhotosService.createCinemaPhoto(dto);
  }

  @Delete('/delete/:id')
  deleteCinemaPhoto(@Param('id') id: number) {
    return this.cinemaPhotosService.deleteCinemaPhoto(id);
  }

}
