import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Technologies } from './technologies.model';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { NotFoundException } from '../exceptions/httpExceptions/notFound.exception';

@Injectable()
export class TechnologiesService {
  constructor(@InjectModel(Technologies) private readonly technologiesRepository: typeof Technologies) {
  }


  async createTechnology(dto: CreateTechnologyDto) {
    return this.technologiesRepository.create(dto);
  }

  async getTechnologyById(id: number) {
    const technology = await this.technologiesRepository.findOne({ where: { id } });
    if (!technology) {
      throw new NotFoundException('Technology is not exist');
    }
    return technology;
  }
}
