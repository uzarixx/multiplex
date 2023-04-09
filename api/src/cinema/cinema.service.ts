import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cinema } from './cinema.model';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { CityService } from '../city/city.service';
import { NotFoundException } from '../exceptions/httpExceptions/notFound.exception';
import { CinemaPhotos } from '../cinema-photos/cinema-photos.model';
import { Technologies } from '../technologies/technologies.model';
import { TechnologiesToCinema } from '../technologies-to-cinema/technologies-to-cinema.model';

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

  async findCinemaById(id: number) {
    const cinema = await this.cinemaRepository.findOne({
      where: { id },
      include: [
        { model: CinemaPhotos },
        {
          model: TechnologiesToCinema,
          include: [ Technologies ]
        },
      ],
    });
    if (!cinema) {
      throw new NotFoundException('Cinema is not a found');
    }
    return cinema;
  }

}
