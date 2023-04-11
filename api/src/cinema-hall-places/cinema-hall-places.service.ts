import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CinemaHallPlaces } from './cinema-hall-places.model';
import { CreateHallPlaceDto } from './dto/create-hall-place.dto';
import { CinemaHallService } from '../cinema-hall/cinema-hall.service';
import { NotFoundException } from '../exceptions/httpExceptions/notFound.exception';

@Injectable()
export class CinemaHallPlacesService {

  constructor(
    @InjectModel(CinemaHallPlaces) private readonly cinemaHallPlacesRepository: typeof CinemaHallPlaces,
    private readonly cinemaHallService: CinemaHallService,
  ) {
  }

  async createHallPlace(dto: CreateHallPlaceDto) {
    await this.cinemaHallService.getCinemaHallById(dto.cinemaHallId);
    return this.cinemaHallPlacesRepository.create(dto);
  }

  async getHallPlaceById(id: number) {
    const place = await this.cinemaHallPlacesRepository.findOne({ where: { id } });
    if (!place) {
      throw new NotFoundException('Cinema hall place is not exist');
    }
    return place;
  }

}
