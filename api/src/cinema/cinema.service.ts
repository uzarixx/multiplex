import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cinema } from './cinema.model';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { CityService } from '../city/city.service';
import { NotFoundException } from '../exceptions/httpExceptions/notFound.exception';

@Injectable()
export class CinemaService {

  constructor(@InjectModel(Cinema) private readonly cinemaRepository: typeof Cinema, private readonly cityService: CityService) {
  }

  async createCinema(dto: CreateCinemaDto) {
    const cinemaByCity = await this.cityService.getCinemaByCity(dto.cityId);
    if (!cinemaByCity) {
      throw new NotFoundException('City is not a found');
    }
    return this.cinemaRepository.create(dto);
  }

}
