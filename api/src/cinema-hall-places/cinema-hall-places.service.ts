import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CinemaHallPlaces } from './cinema-hall-places.model';
import { CreateHallPlaceDto } from './dto/create-hall-place.dto';
import { CinemaHallService } from '../cinema-hall/cinema-hall.service';

@Injectable()
export class CinemaHallPlacesService {

  constructor(
    @InjectModel(CinemaHallPlaces) private readonly cinemaHallPlacesRepository: typeof CinemaHallPlaces, private readonly cinemaHallService: CinemaHallService,
  ) {
  }

  async createHallPlace(dto: CreateHallPlaceDto) {
    await this.cinemaHallService.getCinemaById(dto.cinemaHallId);
    return this.cinemaHallPlacesRepository.create(dto);
  }

}
