import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Technologies } from './technologies.model';
import { CreateTechnologyDto } from './dto/create-technology.dto';

@Injectable()
export class TechnologiesService {
  constructor(@InjectModel(Technologies) private readonly technologiesRepository: typeof Technologies) {
  }


  async createTechnology(dto: CreateTechnologyDto) {
    return this.technologiesRepository.create(dto);
  }
}
