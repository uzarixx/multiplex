import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TechnologiesToCinema } from './technologies-to-cinema.model';
import { CreateTechnologyToCinemaDto } from './dto/create-technology-to-cinema.dto';
import { CinemaService } from '../cinema/cinema.service';
import { TechnologiesService } from '../technologies/technologies.service';

@Injectable()
export class TechnologiesToCinemaService {

  constructor(
    @InjectModel(TechnologiesToCinema) private readonly technologiesToCinemaRepository: typeof TechnologiesToCinema,
    private readonly cinemaService: CinemaService,
    private readonly technologiesService: TechnologiesService,
  ) {
  }

  async createTechnologyToCinema(dto: CreateTechnologyToCinemaDto) {
    await this.cinemaService.findCinemaById(dto.cinemaId);
    await this.technologiesService.getTechnologyById(dto.technologiesId);
    return this.technologiesToCinemaRepository.create(dto);
  }

}
