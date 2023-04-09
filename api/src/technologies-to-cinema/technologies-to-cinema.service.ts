import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TechnologiesToCinema } from './technologies-to-cinema.model';
import { CreateTechnologyToCinemaDto } from './dto/create-technology-to-cinema.dto';

@Injectable()
export class TechnologiesToCinemaService {

  constructor(@InjectModel(TechnologiesToCinema) private readonly technologiesToCinemaRepository: typeof TechnologiesToCinema) {
  }

  async createTechnologyToCinema(dto: CreateTechnologyToCinemaDto) {
    return this.technologiesToCinemaRepository.create(dto);
  }

}
